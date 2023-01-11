package openapisdk.models.shared;


public enum PrivateConnectionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    CREATED("CREATED"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    FAILED_TO_DELETE("FAILED_TO_DELETE");

    public final String value;

    private PrivateConnectionStateEnum(String value) {
        this.value = value;
    }
}
