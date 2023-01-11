package openapisdk.models.shared;


public enum VideoSuggestionsEditorSuggestionsEnum {
    VIDEO_AUTO_LEVELS("videoAutoLevels"),
    VIDEO_STABILIZE("videoStabilize"),
    VIDEO_CROP("videoCrop"),
    AUDIO_QUIET_AUDIO_SWAP("audioQuietAudioSwap");

    public final String value;

    private VideoSuggestionsEditorSuggestionsEnum(String value) {
        this.value = value;
    }
}
