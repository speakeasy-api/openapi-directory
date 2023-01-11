package openapisdk.models.shared;


public enum ApigatewayGatewayStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private ApigatewayGatewayStateEnum(String value) {
        this.value = value;
    }
}
