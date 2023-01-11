package openapisdk.models.shared;


public enum GoogleCloudRunV2ConditionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CONDITION_PENDING("CONDITION_PENDING"),
    CONDITION_RECONCILING("CONDITION_RECONCILING"),
    CONDITION_FAILED("CONDITION_FAILED"),
    CONDITION_SUCCEEDED("CONDITION_SUCCEEDED");

    public final String value;

    private GoogleCloudRunV2ConditionStateEnum(String value) {
        this.value = value;
    }
}
