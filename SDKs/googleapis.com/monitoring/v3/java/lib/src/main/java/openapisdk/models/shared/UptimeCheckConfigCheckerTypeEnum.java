package openapisdk.models.shared;


public enum UptimeCheckConfigCheckerTypeEnum {
    CHECKER_TYPE_UNSPECIFIED("CHECKER_TYPE_UNSPECIFIED"),
    STATIC_IP_CHECKERS("STATIC_IP_CHECKERS"),
    VPC_CHECKERS("VPC_CHECKERS");

    public final String value;

    private UptimeCheckConfigCheckerTypeEnum(String value) {
        this.value = value;
    }
}
