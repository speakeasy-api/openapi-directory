package openapisdk.models.shared;


public enum SiteSummaryResponseFilterStatusEnum {
    UNKNOWN("UNKNOWN"),
    ON("ON"),
    OFF("OFF"),
    PAUSED("PAUSED"),
    PENDING("PENDING");

    public final String value;

    private SiteSummaryResponseFilterStatusEnum(String value) {
        this.value = value;
    }
}
