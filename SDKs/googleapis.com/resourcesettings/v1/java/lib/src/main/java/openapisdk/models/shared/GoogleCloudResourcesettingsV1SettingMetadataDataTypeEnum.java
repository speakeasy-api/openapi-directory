package openapisdk.models.shared;


public enum GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum {
    DATA_TYPE_UNSPECIFIED("DATA_TYPE_UNSPECIFIED"),
    BOOLEAN_("BOOLEAN"),
    STRING("STRING"),
    STRING_SET("STRING_SET"),
    ENUM_VALUE("ENUM_VALUE"),
    DURATION_VALUE("DURATION_VALUE"),
    STRING_MAP("STRING_MAP");

    public final String value;

    private GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum(String value) {
        this.value = value;
    }
}
