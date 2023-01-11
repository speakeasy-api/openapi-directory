package openapisdk.models.shared;


public enum GameEsrbRatingNameEnum {
    EVERYONE("Everyone"),
    EVERYONE10_PLUS("Everyone 10+"),
    TEEN("Teen"),
    MATURE("Mature"),
    ADULTS_ONLY("Adults Only"),
    RATING_PENDING("Rating Pending");

    public final String value;

    private GameEsrbRatingNameEnum(String value) {
        this.value = value;
    }
}
