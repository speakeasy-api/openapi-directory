package openapisdk.models.operations;


public enum GetServersStatusEnum {
    INITIALIZING("initializing"),
    STARTING("starting"),
    RUNNING("running"),
    STOPPING("stopping"),
    OFF("off"),
    DELETING("deleting"),
    REBUILDING("rebuilding"),
    MIGRATING("migrating"),
    UNKNOWN("unknown");

    public final String value;

    private GetServersStatusEnum(String value) {
        this.value = value;
    }
}
