package openapisdk.models.shared;


public enum ApigatewayApiStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private ApigatewayApiStateEnum(String value) {
        this.value = value;
    }
}
