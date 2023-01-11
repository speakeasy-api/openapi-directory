package openapisdk.models.shared;


public enum GoogleCloudChannelV1ColumnDataTypeEnum {
    DATA_TYPE_UNSPECIFIED("DATA_TYPE_UNSPECIFIED"),
    STRING("STRING"),
    INT("INT"),
    DECIMAL("DECIMAL"),
    MONEY("MONEY"),
    DATE("DATE"),
    DATE_TIME("DATE_TIME");

    public final String value;

    private GoogleCloudChannelV1ColumnDataTypeEnum(String value) {
        this.value = value;
    }
}
