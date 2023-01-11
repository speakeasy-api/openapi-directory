package openapisdk.models.shared;


public enum GameEsrbRatingSlugEnum {
    EVERYONE("everyone"),
    EVERYONE10_PLUS("everyone-10-plus"),
    TEEN("teen"),
    MATURE("mature"),
    ADULTS_ONLY("adults-only"),
    RATING_PENDING("rating-pending");

    public final String value;

    private GameEsrbRatingSlugEnum(String value) {
        this.value = value;
    }
}
