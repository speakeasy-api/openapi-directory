package openapisdk.models.shared;


public enum PolicyControllerOnClusterStateStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    INSTALLING("INSTALLING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DECOMISSIONING("DECOMISSIONING"),
    CLUSTER_ERROR("CLUSTER_ERROR"),
    HUB_ERROR("HUB_ERROR"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private PolicyControllerOnClusterStateStateEnum(String value) {
        this.value = value;
    }
}
