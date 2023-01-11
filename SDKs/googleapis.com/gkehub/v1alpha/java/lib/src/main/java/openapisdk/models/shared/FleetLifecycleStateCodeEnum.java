package openapisdk.models.shared;


public enum FleetLifecycleStateCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private FleetLifecycleStateCodeEnum(String value) {
        this.value = value;
    }
}
