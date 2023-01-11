package openapisdk.models.shared;


public enum AdClientStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    READY("READY"),
    GETTING_READY("GETTING_READY"),
    REQUIRES_REVIEW("REQUIRES_REVIEW");

    public final String value;

    private AdClientStateEnum(String value) {
        this.value = value;
    }
}
