package openapisdk.models.shared;


public enum AwsSourceDetailsStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    FAILED("FAILED"),
    ACTIVE("ACTIVE");

    public final String value;

    private AwsSourceDetailsStateEnum(String value) {
        this.value = value;
    }
}
