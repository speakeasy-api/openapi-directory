package openapisdk.models.shared;


public enum CloudSqlSettingsAvailabilityTypeEnum {
    SQL_AVAILABILITY_TYPE_UNSPECIFIED("SQL_AVAILABILITY_TYPE_UNSPECIFIED"),
    ZONAL("ZONAL"),
    REGIONAL("REGIONAL");

    public final String value;

    private CloudSqlSettingsAvailabilityTypeEnum(String value) {
        this.value = value;
    }
}
