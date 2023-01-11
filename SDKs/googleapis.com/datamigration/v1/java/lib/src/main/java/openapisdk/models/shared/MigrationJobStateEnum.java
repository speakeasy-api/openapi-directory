package openapisdk.models.shared;


public enum MigrationJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    MAINTENANCE("MAINTENANCE"),
    DRAFT("DRAFT"),
    CREATING("CREATING"),
    NOT_STARTED("NOT_STARTED"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED"),
    DELETING("DELETING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    DELETED("DELETED"),
    UPDATING("UPDATING"),
    STARTING("STARTING"),
    RESTARTING("RESTARTING"),
    RESUMING("RESUMING");

    public final String value;

    private MigrationJobStateEnum(String value) {
        this.value = value;
    }
}
