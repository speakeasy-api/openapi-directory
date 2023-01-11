package openapisdk.models.shared;


public enum BackupRunBackupKindEnum {
    SQL_BACKUP_KIND_UNSPECIFIED("SQL_BACKUP_KIND_UNSPECIFIED"),
    SNAPSHOT("SNAPSHOT"),
    PHYSICAL("PHYSICAL");

    public final String value;

    private BackupRunBackupKindEnum(String value) {
        this.value = value;
    }
}
