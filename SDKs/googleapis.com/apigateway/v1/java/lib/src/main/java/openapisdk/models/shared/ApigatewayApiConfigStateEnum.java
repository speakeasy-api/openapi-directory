package openapisdk.models.shared;


public enum ApigatewayApiConfigStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    ACTIVATING("ACTIVATING");

    public final String value;

    private ApigatewayApiConfigStateEnum(String value) {
        this.value = value;
    }
}
