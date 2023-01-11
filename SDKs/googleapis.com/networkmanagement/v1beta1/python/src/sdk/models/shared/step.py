import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abortinfo as shared_abortinfo
from ..shared import appengineversioninfo as shared_appengineversioninfo
from ..shared import cloudfunctioninfo as shared_cloudfunctioninfo
from ..shared import cloudrunrevisioninfo as shared_cloudrunrevisioninfo
from ..shared import cloudsqlinstanceinfo as shared_cloudsqlinstanceinfo
from ..shared import deliverinfo as shared_deliverinfo
from ..shared import dropinfo as shared_dropinfo
from ..shared import endpointinfo as shared_endpointinfo
from ..shared import firewallinfo as shared_firewallinfo
from ..shared import forwardinfo as shared_forwardinfo
from ..shared import forwardingruleinfo as shared_forwardingruleinfo
from ..shared import gkemasterinfo as shared_gkemasterinfo
from ..shared import instanceinfo as shared_instanceinfo
from ..shared import loadbalancerinfo as shared_loadbalancerinfo
from ..shared import networkinfo as shared_networkinfo
from ..shared import routeinfo as shared_routeinfo
from ..shared import vpcconnectorinfo as shared_vpcconnectorinfo
from ..shared import vpngatewayinfo as shared_vpngatewayinfo
from ..shared import vpntunnelinfo as shared_vpntunnelinfo

class StepStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    START_FROM_INSTANCE = "START_FROM_INSTANCE"
    START_FROM_INTERNET = "START_FROM_INTERNET"
    START_FROM_PRIVATE_NETWORK = "START_FROM_PRIVATE_NETWORK"
    START_FROM_GKE_MASTER = "START_FROM_GKE_MASTER"
    START_FROM_CLOUD_SQL_INSTANCE = "START_FROM_CLOUD_SQL_INSTANCE"
    START_FROM_CLOUD_FUNCTION = "START_FROM_CLOUD_FUNCTION"
    START_FROM_APP_ENGINE_VERSION = "START_FROM_APP_ENGINE_VERSION"
    START_FROM_CLOUD_RUN_REVISION = "START_FROM_CLOUD_RUN_REVISION"
    APPLY_INGRESS_FIREWALL_RULE = "APPLY_INGRESS_FIREWALL_RULE"
    APPLY_EGRESS_FIREWALL_RULE = "APPLY_EGRESS_FIREWALL_RULE"
    APPLY_ROUTE = "APPLY_ROUTE"
    APPLY_FORWARDING_RULE = "APPLY_FORWARDING_RULE"
    SPOOFING_APPROVED = "SPOOFING_APPROVED"
    ARRIVE_AT_INSTANCE = "ARRIVE_AT_INSTANCE"
    ARRIVE_AT_INTERNAL_LOAD_BALANCER = "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
    ARRIVE_AT_EXTERNAL_LOAD_BALANCER = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
    ARRIVE_AT_VPN_GATEWAY = "ARRIVE_AT_VPN_GATEWAY"
    ARRIVE_AT_VPN_TUNNEL = "ARRIVE_AT_VPN_TUNNEL"
    ARRIVE_AT_VPC_CONNECTOR = "ARRIVE_AT_VPC_CONNECTOR"
    NAT = "NAT"
    PROXY_CONNECTION = "PROXY_CONNECTION"
    DELIVER = "DELIVER"
    DROP = "DROP"
    FORWARD = "FORWARD"
    ABORT = "ABORT"
    VIEWER_PERMISSION_MISSING = "VIEWER_PERMISSION_MISSING"


@dataclass_json
@dataclasses.dataclass
class Step:
    r"""Step
    A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
    """
    
    abort: Optional[shared_abortinfo.AbortInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abort') }})
    app_engine_version: Optional[shared_appengineversioninfo.AppEngineVersionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineVersion') }})
    causes_drop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causesDrop') }})
    cloud_function: Optional[shared_cloudfunctioninfo.CloudFunctionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run_revision: Optional[shared_cloudrunrevisioninfo.CloudRunRevisionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunRevision') }})
    cloud_sql_instance: Optional[shared_cloudsqlinstanceinfo.CloudSQLInstanceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    deliver: Optional[shared_deliverinfo.DeliverInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliver') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drop: Optional[shared_dropinfo.DropInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drop') }})
    endpoint: Optional[shared_endpointinfo.EndpointInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    firewall: Optional[shared_firewallinfo.FirewallInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    forward: Optional[shared_forwardinfo.ForwardInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forward') }})
    forwarding_rule: Optional[shared_forwardingruleinfo.ForwardingRuleInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingRule') }})
    gke_master: Optional[shared_gkemasterinfo.GkeMasterInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeMaster') }})
    instance: Optional[shared_instanceinfo.InstanceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    load_balancer: Optional[shared_loadbalancerinfo.LoadBalancerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancer') }})
    network: Optional[shared_networkinfo.NetworkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    route: Optional[shared_routeinfo.RouteInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    state: Optional[StepStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vpc_connector: Optional[shared_vpcconnectorinfo.VpcConnectorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpn_gateway: Optional[shared_vpngatewayinfo.VpnGatewayInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnGateway') }})
    vpn_tunnel: Optional[shared_vpntunnelinfo.VpnTunnelInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnTunnel') }})
    
