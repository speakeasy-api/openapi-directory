package openapisdk.models.operations;


public enum PostServersCreateServerResponseServerStatusEnum {
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

    private PostServersCreateServerResponseServerStatusEnum(String value) {
        this.value = value;
    }
}
