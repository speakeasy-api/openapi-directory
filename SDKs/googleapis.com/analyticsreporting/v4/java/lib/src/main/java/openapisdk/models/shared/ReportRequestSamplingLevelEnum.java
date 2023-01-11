package openapisdk.models.shared;


public enum ReportRequestSamplingLevelEnum {
    SAMPLING_UNSPECIFIED("SAMPLING_UNSPECIFIED"),
    DEFAULT_("DEFAULT"),
    SMALL("SMALL"),
    LARGE("LARGE");

    public final String value;

    private ReportRequestSamplingLevelEnum(String value) {
        this.value = value;
    }
}
