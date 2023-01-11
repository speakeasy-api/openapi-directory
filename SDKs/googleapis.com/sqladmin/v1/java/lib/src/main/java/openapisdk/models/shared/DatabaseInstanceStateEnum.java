package openapisdk.models.shared;


public enum DatabaseInstanceStateEnum {
    SQL_INSTANCE_STATE_UNSPECIFIED("SQL_INSTANCE_STATE_UNSPECIFIED"),
    RUNNABLE("RUNNABLE"),
    SUSPENDED("SUSPENDED"),
    PENDING_DELETE("PENDING_DELETE"),
    PENDING_CREATE("PENDING_CREATE"),
    MAINTENANCE("MAINTENANCE"),
    FAILED("FAILED"),
    ONLINE_MAINTENANCE("ONLINE_MAINTENANCE");

    public final String value;

    private DatabaseInstanceStateEnum(String value) {
        this.value = value;
    }
}
