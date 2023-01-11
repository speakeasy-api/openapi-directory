package openapisdk.models.shared;


public enum MediaTypeEnum {
    YOUTUBE("youtube"),
    CDPHOTOTHREAD("cdphotothread"),
    IMGUR("imgur"),
    FACEBOOK_PROFILE("facebook-profile"),
    YOUTUBE_CHANNEL("youtube-channel"),
    TWITTER_PROFILE("twitter-profile"),
    GITHUB_PROFILE("github-profile"),
    INSTAGRAM_PROFILE("instagram-profile"),
    PERISCOPE_PROFILE("periscope-profile"),
    GRABCAD("grabcad"),
    INSTAGRAM_IMAGE("instagram-image"),
    EXTERNAL_LINK("external-link"),
    AVATAR("avatar");

    public final String value;

    private MediaTypeEnum(String value) {
        this.value = value;
    }
}
