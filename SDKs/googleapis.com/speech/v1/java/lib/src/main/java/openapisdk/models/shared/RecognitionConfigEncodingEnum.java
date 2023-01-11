package openapisdk.models.shared;


public enum RecognitionConfigEncodingEnum {
    ENCODING_UNSPECIFIED("ENCODING_UNSPECIFIED"),
    LINEAR16("LINEAR16"),
    FLAC("FLAC"),
    MULAW("MULAW"),
    AMR("AMR"),
    AMR_WB("AMR_WB"),
    OGG_OPUS("OGG_OPUS"),
    SPEEX_WITH_HEADER_BYTE("SPEEX_WITH_HEADER_BYTE"),
    WEBM_OPUS("WEBM_OPUS");

    public final String value;

    private RecognitionConfigEncodingEnum(String value) {
        this.value = value;
    }
}
