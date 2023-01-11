package openapisdk.models.shared;


public enum EndpointStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private EndpointStateEnum(String value) {
        this.value = value;
    }
}
