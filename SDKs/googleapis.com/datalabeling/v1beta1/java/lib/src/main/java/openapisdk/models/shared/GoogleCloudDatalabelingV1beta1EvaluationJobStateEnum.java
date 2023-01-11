package openapisdk.models.shared;


public enum GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    SCHEDULED("SCHEDULED"),
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    STOPPED("STOPPED");

    public final String value;

    private GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum(String value) {
        this.value = value;
    }
}
