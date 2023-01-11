package openapisdk.models.shared;


public enum DestinationNotCrawlableEvidenceReasonEnum {
    REASON_UNSPECIFIED("REASON_UNSPECIFIED"),
    UNREACHABLE_ROBOTS("UNREACHABLE_ROBOTS"),
    TIMEOUT_ROBOTS("TIMEOUT_ROBOTS"),
    ROBOTED_DENIED("ROBOTED_DENIED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private DestinationNotCrawlableEvidenceReasonEnum(String value) {
        this.value = value;
    }
}
