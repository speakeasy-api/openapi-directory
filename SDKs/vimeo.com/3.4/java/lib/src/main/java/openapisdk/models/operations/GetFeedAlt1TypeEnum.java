package openapisdk.models.operations;


public enum GetFeedAlt1TypeEnum {
    APPEARS("appears"),
    CATEGORY_FEATURED("category_featured"),
    CHANNEL("channel"),
    FACEBOOK_FEED("facebook_feed"),
    FOLLOWING("following"),
    GROUP("group"),
    LIKES("likes"),
    ONDEMAND_PUBLISH("ondemand_publish"),
    SHARE("share"),
    TAGGED_WITH("tagged_with"),
    TWITTER_TIMELINE("twitter_timeline"),
    UPLOADS("uploads");

    public final String value;

    private GetFeedAlt1TypeEnum(String value) {
        this.value = value;
    }
}
