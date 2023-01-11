package openapisdk.models.shared;


public enum NodeStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    RESTARTING("RESTARTING"),
    REIMAGING("REIMAGING"),
    DELETING("DELETING"),
    REPAIRING("REPAIRING"),
    STOPPED("STOPPED"),
    STOPPING("STOPPING"),
    STARTING("STARTING"),
    PREEMPTED("PREEMPTED"),
    TERMINATED("TERMINATED"),
    HIDING("HIDING"),
    HIDDEN("HIDDEN"),
    UNHIDING("UNHIDING");

    public final String value;

    private NodeStateEnum(String value) {
        this.value = value;
    }
}
