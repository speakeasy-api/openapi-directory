package openapisdk.models.shared;


public enum BackupRunStatusEnum {
    SQL_BACKUP_RUN_STATUS_UNSPECIFIED("SQL_BACKUP_RUN_STATUS_UNSPECIFIED"),
    ENQUEUED("ENQUEUED"),
    OVERDUE("OVERDUE"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    SUCCESSFUL("SUCCESSFUL"),
    SKIPPED("SKIPPED"),
    DELETION_PENDING("DELETION_PENDING"),
    DELETION_FAILED("DELETION_FAILED"),
    DELETED("DELETED");

    public final String value;

    private BackupRunStatusEnum(String value) {
        this.value = value;
    }
}
