import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamicrouteconfig as shared_dynamicrouteconfig
from ..shared import staticrouteconfig as shared_staticrouteconfig


@dataclass_json
@dataclasses.dataclass
class RoutesConfigDump:
    r"""RoutesConfigDump
    Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
    """
    
    dynamic_route_configs: Optional[list[shared_dynamicrouteconfig.DynamicRouteConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicRouteConfigs') }})
    static_route_configs: Optional[list[shared_staticrouteconfig.StaticRouteConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticRouteConfigs') }})
    
