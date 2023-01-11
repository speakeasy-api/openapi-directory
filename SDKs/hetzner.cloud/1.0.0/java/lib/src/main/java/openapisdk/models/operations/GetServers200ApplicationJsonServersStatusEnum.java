package openapisdk.models.operations;


public enum GetServers200ApplicationJsonServersStatusEnum {
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

    private GetServers200ApplicationJsonServersStatusEnum(String value) {
        this.value = value;
    }
}
