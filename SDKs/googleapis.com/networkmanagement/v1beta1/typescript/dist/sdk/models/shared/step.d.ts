import { SpeakeasyBase } from "../../../internal/utils";
import { AbortInfo } from "./abortinfo";
import { AppEngineVersionInfo } from "./appengineversioninfo";
import { CloudFunctionInfo } from "./cloudfunctioninfo";
import { CloudRunRevisionInfo } from "./cloudrunrevisioninfo";
import { CloudSQLInstanceInfo } from "./cloudsqlinstanceinfo";
import { DeliverInfo } from "./deliverinfo";
import { DropInfo } from "./dropinfo";
import { EndpointInfo } from "./endpointinfo";
import { FirewallInfo } from "./firewallinfo";
import { ForwardInfo } from "./forwardinfo";
import { ForwardingRuleInfo } from "./forwardingruleinfo";
import { GKEMasterInfo } from "./gkemasterinfo";
import { InstanceInfo } from "./instanceinfo";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { NetworkInfo } from "./networkinfo";
import { RouteInfo } from "./routeinfo";
import { VpcConnectorInfo } from "./vpcconnectorinfo";
import { VpnGatewayInfo } from "./vpngatewayinfo";
import { VpnTunnelInfo } from "./vpntunnelinfo";
/**
 * Each step is in one of the pre-defined states.
 */
export declare enum StepStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StartFromInstance = "START_FROM_INSTANCE",
    StartFromInternet = "START_FROM_INTERNET",
    StartFromPrivateNetwork = "START_FROM_PRIVATE_NETWORK",
    StartFromGkeMaster = "START_FROM_GKE_MASTER",
    StartFromCloudSqlInstance = "START_FROM_CLOUD_SQL_INSTANCE",
    StartFromCloudFunction = "START_FROM_CLOUD_FUNCTION",
    StartFromAppEngineVersion = "START_FROM_APP_ENGINE_VERSION",
    StartFromCloudRunRevision = "START_FROM_CLOUD_RUN_REVISION",
    ApplyIngressFirewallRule = "APPLY_INGRESS_FIREWALL_RULE",
    ApplyEgressFirewallRule = "APPLY_EGRESS_FIREWALL_RULE",
    ApplyRoute = "APPLY_ROUTE",
    ApplyForwardingRule = "APPLY_FORWARDING_RULE",
    SpoofingApproved = "SPOOFING_APPROVED",
    ArriveAtInstance = "ARRIVE_AT_INSTANCE",
    ArriveAtInternalLoadBalancer = "ARRIVE_AT_INTERNAL_LOAD_BALANCER",
    ArriveAtExternalLoadBalancer = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER",
    ArriveAtVpnGateway = "ARRIVE_AT_VPN_GATEWAY",
    ArriveAtVpnTunnel = "ARRIVE_AT_VPN_TUNNEL",
    ArriveAtVpcConnector = "ARRIVE_AT_VPC_CONNECTOR",
    Nat = "NAT",
    ProxyConnection = "PROXY_CONNECTION",
    Deliver = "DELIVER",
    Drop = "DROP",
    Forward = "FORWARD",
    Abort = "ABORT",
    ViewerPermissionMissing = "VIEWER_PERMISSION_MISSING"
}
/**
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
 */
export declare class Step extends SpeakeasyBase {
    /**
     * Details of the final state "abort" and associated resource.
     */
    abort?: AbortInfo;
    /**
     * For display only. Metadata associated with an App Engine version.
     */
    appEngineVersion?: AppEngineVersionInfo;
    /**
     * This is a step that leads to the final state Drop.
     */
    causesDrop?: boolean;
    /**
     * For display only. Metadata associated with a Cloud Function.
     */
    cloudFunction?: CloudFunctionInfo;
    /**
     * For display only. Metadata associated with a Cloud Run revision.
     */
    cloudRunRevision?: CloudRunRevisionInfo;
    /**
     * For display only. Metadata associated with a Cloud SQL instance.
     */
    cloudSqlInstance?: CloudSQLInstanceInfo;
    /**
     * Details of the final state "deliver" and associated resource.
     */
    deliver?: DeliverInfo;
    /**
     * A description of the step. Usually this is a summary of the state.
     */
    description?: string;
    /**
     * Details of the final state "drop" and associated resource.
     */
    drop?: DropInfo;
    /**
     * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
     */
    endpoint?: EndpointInfo;
    /**
     * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
     */
    firewall?: FirewallInfo;
    /**
     * Details of the final state "forward" and associated resource.
     */
    forward?: ForwardInfo;
    /**
     * For display only. Metadata associated with a Compute Engine forwarding rule.
     */
    forwardingRule?: ForwardingRuleInfo;
    /**
     * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
     */
    gkeMaster?: GKEMasterInfo;
    /**
     * For display only. Metadata associated with a Compute Engine instance.
     */
    instance?: InstanceInfo;
    /**
     * For display only. Metadata associated with a load balancer.
     */
    loadBalancer?: LoadBalancerInfo;
    /**
     * For display only. Metadata associated with a Compute Engine network.
     */
    network?: NetworkInfo;
    /**
     * Project ID that contains the configuration this step is validating.
     */
    projectId?: string;
    /**
     * For display only. Metadata associated with a Compute Engine route.
     */
    route?: RouteInfo;
    /**
     * Each step is in one of the pre-defined states.
     */
    state?: StepStateEnum;
    /**
     * For display only. Metadata associated with a VPC connector.
     */
    vpcConnector?: VpcConnectorInfo;
    /**
     * For display only. Metadata associated with a Compute Engine VPN gateway.
     */
    vpnGateway?: VpnGatewayInfo;
    /**
     * For display only. Metadata associated with a Compute Engine VPN tunnel.
     */
    vpnTunnel?: VpnTunnelInfo;
}
