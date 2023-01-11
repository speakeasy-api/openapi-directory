package openapisdk.models.shared;


public enum VolumeStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private VolumeStateEnum(String value) {
        this.value = value;
    }
}
