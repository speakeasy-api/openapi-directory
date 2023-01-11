package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONING("PROVISIONING"),
    RUNNING("RUNNING"),
    DELETED("DELETED"),
    UPDATING("UPDATING"),
    STARTING("STARTING"),
    STOPPING("STOPPING"),
    SHUTDOWN("SHUTDOWN");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
