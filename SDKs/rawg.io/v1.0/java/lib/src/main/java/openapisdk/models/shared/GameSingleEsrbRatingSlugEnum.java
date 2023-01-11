package openapisdk.models.shared;


public enum GameSingleEsrbRatingSlugEnum {
    EVERYONE("everyone"),
    EVERYONE10_PLUS("everyone-10-plus"),
    TEEN("teen"),
    MATURE("mature"),
    ADULTS_ONLY("adults-only"),
    RATING_PENDING("rating-pending");

    public final String value;

    private GameSingleEsrbRatingSlugEnum(String value) {
        this.value = value;
    }
}
