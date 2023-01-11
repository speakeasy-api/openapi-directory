package openapisdk.models.shared;


public enum FeedFeedTypeEnum {
    FEED_TYPE_UNSPECIFIED("FEED_TYPE_UNSPECIFIED"),
    DOMAIN_ROSTER_CHANGES("DOMAIN_ROSTER_CHANGES"),
    COURSE_ROSTER_CHANGES("COURSE_ROSTER_CHANGES"),
    COURSE_WORK_CHANGES("COURSE_WORK_CHANGES");

    public final String value;

    private FeedFeedTypeEnum(String value) {
        this.value = value;
    }
}
