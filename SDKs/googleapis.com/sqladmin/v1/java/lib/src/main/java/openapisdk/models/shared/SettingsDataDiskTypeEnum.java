package openapisdk.models.shared;


public enum SettingsDataDiskTypeEnum {
    SQL_DATA_DISK_TYPE_UNSPECIFIED("SQL_DATA_DISK_TYPE_UNSPECIFIED"),
    PD_SSD("PD_SSD"),
    PD_HDD("PD_HDD"),
    OBSOLETE_LOCAL_SSD("OBSOLETE_LOCAL_SSD");

    public final String value;

    private SettingsDataDiskTypeEnum(String value) {
        this.value = value;
    }
}
