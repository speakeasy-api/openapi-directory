package openapisdk.models.shared;


public enum OperationalDisconnectProblemDisconnectTypeEnum {
    OPERATIONAL_DISCONNECT("OperationalDisconnect"),
    UPSTREAM_OPERATIONAL_DISCONNECT("UpstreamOperationalDisconnect"),
    FORCE_DISCONNECT("ForceDisconnect"),
    UPSTREAM_UNCLEAN_DISCONNECT("UpstreamUncleanDisconnect"),
    SLOW_READER("SlowReader"),
    INTERNAL_ERROR("InternalError"),
    PACKAGE_UPGRADED("PackageUpgraded"),
    PACKAGE_DOWNGRADED("PackageDowngraded"),
    CLIENT_APPLICATION_STATE_DEGRADED("ClientApplicationStateDegraded");

    public final String value;

    private OperationalDisconnectProblemDisconnectTypeEnum(String value) {
        this.value = value;
    }
}
