package openapisdk.models.shared;


public enum ReportGoogleLocationRequestReportReasonBadLocationEnum {
    BAD_LOCATION_REASON_UNSPECIFIED("BAD_LOCATION_REASON_UNSPECIFIED"),
    NOT_A_LOCATION("NOT_A_LOCATION"),
    PERMANENTLY_CLOSED("PERMANENTLY_CLOSED"),
    DOES_NOT_EXIST("DOES_NOT_EXIST"),
    SPAM("SPAM"),
    NOT_A_BUSINESS("NOT_A_BUSINESS"),
    MOVED("MOVED"),
    DUPLICATE("DUPLICATE");

    public final String value;

    private ReportGoogleLocationRequestReportReasonBadLocationEnum(String value) {
        this.value = value;
    }
}
