package openapisdk.models.shared;


public enum NetworkReportSpecDimensionsEnum {
    DIMENSION_UNSPECIFIED("DIMENSION_UNSPECIFIED"),
    DATE("DATE"),
    MONTH("MONTH"),
    WEEK("WEEK"),
    AD_UNIT("AD_UNIT"),
    APP("APP"),
    AD_TYPE("AD_TYPE"),
    COUNTRY("COUNTRY"),
    FORMAT("FORMAT"),
    PLATFORM("PLATFORM"),
    MOBILE_OS_VERSION("MOBILE_OS_VERSION"),
    GMA_SDK_VERSION("GMA_SDK_VERSION"),
    APP_VERSION_NAME("APP_VERSION_NAME"),
    SERVING_RESTRICTION("SERVING_RESTRICTION");

    public final String value;

    private NetworkReportSpecDimensionsEnum(String value) {
        this.value = value;
    }
}
