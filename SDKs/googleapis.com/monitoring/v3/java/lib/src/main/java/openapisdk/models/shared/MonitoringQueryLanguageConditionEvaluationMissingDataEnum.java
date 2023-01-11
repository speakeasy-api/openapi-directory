package openapisdk.models.shared;


public enum MonitoringQueryLanguageConditionEvaluationMissingDataEnum {
    EVALUATION_MISSING_DATA_UNSPECIFIED("EVALUATION_MISSING_DATA_UNSPECIFIED"),
    EVALUATION_MISSING_DATA_INACTIVE("EVALUATION_MISSING_DATA_INACTIVE"),
    EVALUATION_MISSING_DATA_ACTIVE("EVALUATION_MISSING_DATA_ACTIVE"),
    EVALUATION_MISSING_DATA_NO_OP("EVALUATION_MISSING_DATA_NO_OP");

    public final String value;

    private MonitoringQueryLanguageConditionEvaluationMissingDataEnum(String value) {
        this.value = value;
    }
}
