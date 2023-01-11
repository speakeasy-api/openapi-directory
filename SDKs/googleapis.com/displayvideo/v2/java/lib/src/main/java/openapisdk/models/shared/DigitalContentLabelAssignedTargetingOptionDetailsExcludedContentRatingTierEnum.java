package openapisdk.models.shared;


public enum DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum {
    CONTENT_RATING_TIER_UNSPECIFIED("CONTENT_RATING_TIER_UNSPECIFIED"),
    CONTENT_RATING_TIER_UNRATED("CONTENT_RATING_TIER_UNRATED"),
    CONTENT_RATING_TIER_GENERAL("CONTENT_RATING_TIER_GENERAL"),
    CONTENT_RATING_TIER_PARENTAL_GUIDANCE("CONTENT_RATING_TIER_PARENTAL_GUIDANCE"),
    CONTENT_RATING_TIER_TEENS("CONTENT_RATING_TIER_TEENS"),
    CONTENT_RATING_TIER_MATURE("CONTENT_RATING_TIER_MATURE"),
    CONTENT_RATING_TIER_FAMILIES("CONTENT_RATING_TIER_FAMILIES");

    public final String value;

    private DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum(String value) {
        this.value = value;
    }
}
