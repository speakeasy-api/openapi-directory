package openapisdk.models.shared;


public enum NodeStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private NodeStateEnum(String value) {
        this.value = value;
    }
}
