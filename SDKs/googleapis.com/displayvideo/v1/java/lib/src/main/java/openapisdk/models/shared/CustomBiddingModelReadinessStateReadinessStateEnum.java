package openapisdk.models.shared;


public enum CustomBiddingModelReadinessStateReadinessStateEnum {
    READINESS_STATE_UNSPECIFIED("READINESS_STATE_UNSPECIFIED"),
    READINESS_STATE_ACTIVE("READINESS_STATE_ACTIVE"),
    READINESS_STATE_INSUFFICIENT_DATA("READINESS_STATE_INSUFFICIENT_DATA"),
    READINESS_STATE_TRAINING("READINESS_STATE_TRAINING"),
    READINESS_STATE_NO_VALID_SCRIPT("READINESS_STATE_NO_VALID_SCRIPT");

    public final String value;

    private CustomBiddingModelReadinessStateReadinessStateEnum(String value) {
        this.value = value;
    }
}
