package openapisdk.models.shared;


public enum GoogleCloudRunV2ConditionExecutionReasonEnum {
    EXECUTION_REASON_UNDEFINED("EXECUTION_REASON_UNDEFINED"),
    JOB_STATUS_SERVICE_POLLING_ERROR("JOB_STATUS_SERVICE_POLLING_ERROR"),
    NON_ZERO_EXIT_CODE("NON_ZERO_EXIT_CODE"),
    CANCELLED("CANCELLED");

    public final String value;

    private GoogleCloudRunV2ConditionExecutionReasonEnum(String value) {
        this.value = value;
    }
}
