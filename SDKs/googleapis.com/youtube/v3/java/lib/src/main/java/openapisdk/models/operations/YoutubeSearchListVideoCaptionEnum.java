package openapisdk.models.operations;


public enum YoutubeSearchListVideoCaptionEnum {
    VIDEO_CAPTION_UNSPECIFIED("videoCaptionUnspecified"),
    ANY("any"),
    CLOSED_CAPTION("closedCaption"),
    NONE("none");

    public final String value;

    private YoutubeSearchListVideoCaptionEnum(String value) {
        this.value = value;
    }
}
