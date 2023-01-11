package openapisdk.models.shared;


public enum FindingMuteEnum {
    MUTE_UNSPECIFIED("MUTE_UNSPECIFIED"),
    MUTED("MUTED"),
    UNMUTED("UNMUTED"),
    UNDEFINED("UNDEFINED");

    public final String value;

    private FindingMuteEnum(String value) {
        this.value = value;
    }
}
