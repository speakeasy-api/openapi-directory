package openapisdk.models.shared;


public enum ChannelFrom4ContentTypeEnum {
    AUDIO_L16_RATE_EQUAL8000("audio/l16;rate=8000"),
    AUDIO_L16_RATE_EQUAL16000("audio/l16;rate=16000");

    public final String value;

    private ChannelFrom4ContentTypeEnum(String value) {
        this.value = value;
    }
}
