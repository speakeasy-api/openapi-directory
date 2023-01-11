package openapisdk.models.shared;


public enum LoadBalancerBackendHealthCheckFirewallStateEnum {
    HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED("HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"),
    CONFIGURED("CONFIGURED"),
    MISCONFIGURED("MISCONFIGURED");

    public final String value;

    private LoadBalancerBackendHealthCheckFirewallStateEnum(String value) {
        this.value = value;
    }
}
