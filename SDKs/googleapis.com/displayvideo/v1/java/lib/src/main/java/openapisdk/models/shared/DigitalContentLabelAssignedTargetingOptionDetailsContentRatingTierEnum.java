package openapisdk.models.shared;


public enum DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum {
    CONTENT_RATING_TIER_UNSPECIFIED("CONTENT_RATING_TIER_UNSPECIFIED"),
    CONTENT_RATING_TIER_UNRATED("CONTENT_RATING_TIER_UNRATED"),
    CONTENT_RATING_TIER_GENERAL("CONTENT_RATING_TIER_GENERAL"),
    CONTENT_RATING_TIER_PARENTAL_GUIDANCE("CONTENT_RATING_TIER_PARENTAL_GUIDANCE"),
    CONTENT_RATING_TIER_TEENS("CONTENT_RATING_TIER_TEENS"),
    CONTENT_RATING_TIER_MATURE("CONTENT_RATING_TIER_MATURE");

    public final String value;

    private DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum(String value) {
        this.value = value;
    }
}
