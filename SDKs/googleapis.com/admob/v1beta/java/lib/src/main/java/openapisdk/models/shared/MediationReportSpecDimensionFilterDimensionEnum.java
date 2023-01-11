package openapisdk.models.shared;


public enum MediationReportSpecDimensionFilterDimensionEnum {
    DIMENSION_UNSPECIFIED("DIMENSION_UNSPECIFIED"),
    DATE("DATE"),
    MONTH("MONTH"),
    WEEK("WEEK"),
    AD_SOURCE("AD_SOURCE"),
    AD_SOURCE_INSTANCE("AD_SOURCE_INSTANCE"),
    AD_UNIT("AD_UNIT"),
    APP("APP"),
    MEDIATION_GROUP("MEDIATION_GROUP"),
    COUNTRY("COUNTRY"),
    FORMAT("FORMAT"),
    PLATFORM("PLATFORM"),
    MOBILE_OS_VERSION("MOBILE_OS_VERSION"),
    GMA_SDK_VERSION("GMA_SDK_VERSION"),
    APP_VERSION_NAME("APP_VERSION_NAME"),
    SERVING_RESTRICTION("SERVING_RESTRICTION");

    public final String value;

    private MediationReportSpecDimensionFilterDimensionEnum(String value) {
        this.value = value;
    }
}
