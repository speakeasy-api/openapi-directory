package openapisdk.models.operations;


public enum GetVideosFilterEnum {
    APP_ONLY("app_only"),
    EMBEDDABLE("embeddable"),
    FEATURED("featured"),
    PLAYABLE("playable");

    public final String value;

    private GetVideosFilterEnum(String value) {
        this.value = value;
    }
}
