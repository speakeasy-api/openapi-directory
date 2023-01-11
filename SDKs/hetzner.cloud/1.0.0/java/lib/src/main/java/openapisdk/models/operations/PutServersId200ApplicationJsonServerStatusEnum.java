package openapisdk.models.operations;


public enum PutServersId200ApplicationJsonServerStatusEnum {
    RUNNING("running"),
    INITIALIZING("initializing"),
    STARTING("starting"),
    STOPPING("stopping"),
    OFF("off"),
    DELETING("deleting"),
    MIGRATING("migrating"),
    REBUILDING("rebuilding"),
    UNKNOWN("unknown");

    public final String value;

    private PutServersId200ApplicationJsonServerStatusEnum(String value) {
        this.value = value;
    }
}
