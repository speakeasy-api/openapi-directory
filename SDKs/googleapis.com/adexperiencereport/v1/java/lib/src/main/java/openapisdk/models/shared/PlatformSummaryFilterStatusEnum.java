package openapisdk.models.shared;


public enum PlatformSummaryFilterStatusEnum {
    UNKNOWN("UNKNOWN"),
    ON("ON"),
    OFF("OFF"),
    PAUSED("PAUSED"),
    PENDING("PENDING");

    public final String value;

    private PlatformSummaryFilterStatusEnum(String value) {
        this.value = value;
    }
}
