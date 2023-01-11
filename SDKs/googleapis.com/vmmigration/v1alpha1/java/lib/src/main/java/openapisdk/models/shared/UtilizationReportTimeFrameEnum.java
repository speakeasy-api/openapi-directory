package openapisdk.models.shared;


public enum UtilizationReportTimeFrameEnum {
    TIME_FRAME_UNSPECIFIED("TIME_FRAME_UNSPECIFIED"),
    WEEK("WEEK"),
    MONTH("MONTH"),
    YEAR("YEAR");

    public final String value;

    private UtilizationReportTimeFrameEnum(String value) {
        this.value = value;
    }
}
