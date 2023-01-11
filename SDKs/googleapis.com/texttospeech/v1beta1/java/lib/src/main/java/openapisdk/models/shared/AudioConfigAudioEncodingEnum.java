package openapisdk.models.shared;


public enum AudioConfigAudioEncodingEnum {
    AUDIO_ENCODING_UNSPECIFIED("AUDIO_ENCODING_UNSPECIFIED"),
    LINEAR16("LINEAR16"),
    MP3("MP3"),
    MP364_KBPS("MP3_64_KBPS"),
    OGG_OPUS("OGG_OPUS"),
    MULAW("MULAW"),
    ALAW("ALAW");

    public final String value;

    private AudioConfigAudioEncodingEnum(String value) {
        this.value = value;
    }
}
