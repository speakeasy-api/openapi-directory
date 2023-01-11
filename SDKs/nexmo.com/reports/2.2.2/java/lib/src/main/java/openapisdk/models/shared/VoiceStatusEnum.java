package openapisdk.models.shared;


public enum VoiceStatusEnum {
    ANSWERED("answered"),
    MACHINE("machine"),
    ERROR("error"),
    FAILED("failed");

    public final String value;

    private VoiceStatusEnum(String value) {
        this.value = value;
    }
}
