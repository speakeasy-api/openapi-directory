package openapisdk.models.operations;


public enum GamesScoresListCollectionEnum {
    SCORE_COLLECTION_UNSPECIFIED("SCORE_COLLECTION_UNSPECIFIED"),
    PUBLIC_("PUBLIC"),
    SOCIAL("SOCIAL"),
    FRIENDS("FRIENDS");

    public final String value;

    private GamesScoresListCollectionEnum(String value) {
        this.value = value;
    }
}
