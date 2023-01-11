package openapisdk.models.operations;


public enum YoutubeSearchListVideoTypeEnum {
    VIDEO_TYPE_UNSPECIFIED("videoTypeUnspecified"),
    ANY("any"),
    MOVIE("movie"),
    EPISODE("episode");

    public final String value;

    private YoutubeSearchListVideoTypeEnum(String value) {
        this.value = value;
    }
}
