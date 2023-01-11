package openapisdk.models.shared;


public enum CreateAudioRenderPresetEnum {
    MASTER_MP3("MASTER_MP3"),
    MASTER_WAV("MASTER_WAV"),
    STEMS_WAV("STEMS_WAV");

    public final String value;

    private CreateAudioRenderPresetEnum(String value) {
        this.value = value;
    }
}
