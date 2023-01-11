package openapisdk.models.shared;


public enum MatterStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    OPEN("OPEN"),
    CLOSED("CLOSED"),
    DELETED("DELETED");

    public final String value;

    private MatterStateEnum(String value) {
        this.value = value;
    }
}
