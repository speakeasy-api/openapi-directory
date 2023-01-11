package openapisdk.models.shared;


public enum SiteStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    REQUIRES_REVIEW("REQUIRES_REVIEW"),
    GETTING_READY("GETTING_READY"),
    READY("READY"),
    NEEDS_ATTENTION("NEEDS_ATTENTION");

    public final String value;

    private SiteStateEnum(String value) {
        this.value = value;
    }
}
