package openapisdk.models.shared;


public enum BackupRunTypeEnum {
    SQL_BACKUP_RUN_TYPE_UNSPECIFIED("SQL_BACKUP_RUN_TYPE_UNSPECIFIED"),
    AUTOMATED("AUTOMATED"),
    ON_DEMAND("ON_DEMAND");

    public final String value;

    private BackupRunTypeEnum(String value) {
        this.value = value;
    }
}
