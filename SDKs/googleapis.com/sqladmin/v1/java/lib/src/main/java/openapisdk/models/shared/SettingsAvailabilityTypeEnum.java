package openapisdk.models.shared;


public enum SettingsAvailabilityTypeEnum {
    SQL_AVAILABILITY_TYPE_UNSPECIFIED("SQL_AVAILABILITY_TYPE_UNSPECIFIED"),
    ZONAL("ZONAL"),
    REGIONAL("REGIONAL");

    public final String value;

    private SettingsAvailabilityTypeEnum(String value) {
        this.value = value;
    }
}
