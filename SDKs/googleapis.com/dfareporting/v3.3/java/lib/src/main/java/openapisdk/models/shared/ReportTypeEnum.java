package openapisdk.models.shared;


public enum ReportTypeEnum {
    STANDARD("STANDARD"),
    REACH("REACH"),
    PATH_TO_CONVERSION("PATH_TO_CONVERSION"),
    CROSS_DIMENSION_REACH("CROSS_DIMENSION_REACH"),
    FLOODLIGHT("FLOODLIGHT");

    public final String value;

    private ReportTypeEnum(String value) {
        this.value = value;
    }
}
