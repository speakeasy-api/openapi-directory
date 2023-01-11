package openapisdk.models.shared;


public enum SqlOutOfDiskReportSqlOutOfDiskStateEnum {
    SQL_OUT_OF_DISK_STATE_UNSPECIFIED("SQL_OUT_OF_DISK_STATE_UNSPECIFIED"),
    NORMAL("NORMAL"),
    SOFT_SHUTDOWN("SOFT_SHUTDOWN");

    public final String value;

    private SqlOutOfDiskReportSqlOutOfDiskStateEnum(String value) {
        this.value = value;
    }
}
