package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Step
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
public class Step {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abort")
    public AbortInfo abort;
    public Step withAbort(AbortInfo abort) {
        this.abort = abort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineVersion")
    public AppEngineVersionInfo appEngineVersion;
    public Step withAppEngineVersion(AppEngineVersionInfo appEngineVersion) {
        this.appEngineVersion = appEngineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("causesDrop")
    public Boolean causesDrop;
    public Step withCausesDrop(Boolean causesDrop) {
        this.causesDrop = causesDrop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudFunction")
    public CloudFunctionInfo cloudFunction;
    public Step withCloudFunction(CloudFunctionInfo cloudFunction) {
        this.cloudFunction = cloudFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRunRevision")
    public CloudRunRevisionInfo cloudRunRevision;
    public Step withCloudRunRevision(CloudRunRevisionInfo cloudRunRevision) {
        this.cloudRunRevision = cloudRunRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlInstance")
    public CloudSqlInstanceInfo cloudSqlInstance;
    public Step withCloudSqlInstance(CloudSqlInstanceInfo cloudSqlInstance) {
        this.cloudSqlInstance = cloudSqlInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliver")
    public DeliverInfo deliver;
    public Step withDeliver(DeliverInfo deliver) {
        this.deliver = deliver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Step withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drop")
    public DropInfo drop;
    public Step withDrop(DropInfo drop) {
        this.drop = drop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public EndpointInfo endpoint;
    public Step withEndpoint(EndpointInfo endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewall")
    public FirewallInfo firewall;
    public Step withFirewall(FirewallInfo firewall) {
        this.firewall = firewall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forward")
    public ForwardInfo forward;
    public Step withForward(ForwardInfo forward) {
        this.forward = forward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardingRule")
    public ForwardingRuleInfo forwardingRule;
    public Step withForwardingRule(ForwardingRuleInfo forwardingRule) {
        this.forwardingRule = forwardingRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeMaster")
    public GkeMasterInfo gkeMaster;
    public Step withGkeMaster(GkeMasterInfo gkeMaster) {
        this.gkeMaster = gkeMaster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public InstanceInfo instance;
    public Step withInstance(InstanceInfo instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancer")
    public LoadBalancerInfo loadBalancer;
    public Step withLoadBalancer(LoadBalancerInfo loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public NetworkInfo network;
    public Step withNetwork(NetworkInfo network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Step withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route")
    public RouteInfo route;
    public Step withRoute(RouteInfo route) {
        this.route = route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StepStateEnum state;
    public Step withState(StepStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConnector")
    public VpcConnectorInfo vpcConnector;
    public Step withVpcConnector(VpcConnectorInfo vpcConnector) {
        this.vpcConnector = vpcConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnGateway")
    public VpnGatewayInfo vpnGateway;
    public Step withVpnGateway(VpnGatewayInfo vpnGateway) {
        this.vpnGateway = vpnGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnTunnel")
    public VpnTunnelInfo vpnTunnel;
    public Step withVpnTunnel(VpnTunnelInfo vpnTunnel) {
        this.vpnTunnel = vpnTunnel;
        return this;
    }
}