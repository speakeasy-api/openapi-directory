package openapisdk.models.shared;


public enum DiscoveryOccurrenceAnalysisStatusEnum {
    ANALYSIS_STATUS_UNSPECIFIED("ANALYSIS_STATUS_UNSPECIFIED"),
    PENDING("PENDING"),
    SCANNING("SCANNING"),
    FINISHED_SUCCESS("FINISHED_SUCCESS"),
    COMPLETE("COMPLETE"),
    FINISHED_FAILED("FINISHED_FAILED"),
    FINISHED_UNSUPPORTED("FINISHED_UNSUPPORTED");

    public final String value;

    private DiscoveryOccurrenceAnalysisStatusEnum(String value) {
        this.value = value;
    }
}
