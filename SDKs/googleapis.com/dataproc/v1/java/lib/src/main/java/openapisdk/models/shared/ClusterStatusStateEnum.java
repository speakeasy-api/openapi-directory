package openapisdk.models.shared;


public enum ClusterStatusStateEnum {
    UNKNOWN("UNKNOWN"),
    CREATING("CREATING"),
    RUNNING("RUNNING"),
    ERROR("ERROR"),
    ERROR_DUE_TO_UPDATE("ERROR_DUE_TO_UPDATE"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    STARTING("STARTING"),
    REPAIRING("REPAIRING");

    public final String value;

    private ClusterStatusStateEnum(String value) {
        this.value = value;
    }
}
