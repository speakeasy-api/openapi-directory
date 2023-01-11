package openapisdk.models.shared;


public enum ActivityContentDetailsRecommendationReasonEnum {
    REASON_UNSPECIFIED("reasonUnspecified"),
    VIDEO_FAVORITED("videoFavorited"),
    VIDEO_LIKED("videoLiked"),
    VIDEO_WATCHED("videoWatched");

    public final String value;

    private ActivityContentDetailsRecommendationReasonEnum(String value) {
        this.value = value;
    }
}
