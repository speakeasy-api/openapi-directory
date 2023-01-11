import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamicscopedrouteconfigs as shared_dynamicscopedrouteconfigs
from ..shared import inlinescopedrouteconfigs as shared_inlinescopedrouteconfigs


@dataclass_json
@dataclasses.dataclass
class ScopedRoutesConfigDump:
    r"""ScopedRoutesConfigDump
    Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
    """
    
    dynamic_scoped_route_configs: Optional[list[shared_dynamicscopedrouteconfigs.DynamicScopedRouteConfigs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicScopedRouteConfigs') }})
    inline_scoped_route_configs: Optional[list[shared_inlinescopedrouteconfigs.InlineScopedRouteConfigs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineScopedRouteConfigs') }})
    
