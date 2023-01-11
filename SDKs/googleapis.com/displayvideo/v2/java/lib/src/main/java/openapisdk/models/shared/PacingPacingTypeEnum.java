package openapisdk.models.shared;


public enum PacingPacingTypeEnum {
    PACING_TYPE_UNSPECIFIED("PACING_TYPE_UNSPECIFIED"),
    PACING_TYPE_AHEAD("PACING_TYPE_AHEAD"),
    PACING_TYPE_ASAP("PACING_TYPE_ASAP"),
    PACING_TYPE_EVEN("PACING_TYPE_EVEN");

    public final String value;

    private PacingPacingTypeEnum(String value) {
        this.value = value;
    }
}
