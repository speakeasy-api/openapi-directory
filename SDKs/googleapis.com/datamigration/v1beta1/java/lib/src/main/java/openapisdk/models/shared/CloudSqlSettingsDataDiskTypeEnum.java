package openapisdk.models.shared;


public enum CloudSqlSettingsDataDiskTypeEnum {
    SQL_DATA_DISK_TYPE_UNSPECIFIED("SQL_DATA_DISK_TYPE_UNSPECIFIED"),
    PD_SSD("PD_SSD"),
    PD_HDD("PD_HDD");

    public final String value;

    private CloudSqlSettingsDataDiskTypeEnum(String value) {
        this.value = value;
    }
}
