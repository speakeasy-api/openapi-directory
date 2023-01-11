package openapisdk.models.shared;


public enum EventBatchRecordFailureFailureCauseEnum {
    EVENT_FAILURE_CAUSE_UNSPECIFIED("EVENT_FAILURE_CAUSE_UNSPECIFIED"),
    TOO_LARGE("TOO_LARGE"),
    TIME_PERIOD_EXPIRED("TIME_PERIOD_EXPIRED"),
    TIME_PERIOD_SHORT("TIME_PERIOD_SHORT"),
    TIME_PERIOD_LONG("TIME_PERIOD_LONG"),
    ALREADY_UPDATED("ALREADY_UPDATED"),
    RECORD_RATE_HIGH("RECORD_RATE_HIGH");

    public final String value;

    private EventBatchRecordFailureFailureCauseEnum(String value) {
        this.value = value;
    }
}
