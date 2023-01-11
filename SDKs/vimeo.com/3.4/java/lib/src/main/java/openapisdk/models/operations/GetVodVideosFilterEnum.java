package openapisdk.models.operations;


public enum GetVodVideosFilterEnum {
    ALL("all"),
    BUY("buy"),
    EXPIRING_SOON("expiring_soon"),
    EXTRA("extra"),
    MAIN("main"),
    MAIN_VIEWABLE("main.viewable"),
    RENT("rent"),
    TRAILER("trailer"),
    UNWATCHED("unwatched"),
    VIEWABLE("viewable"),
    WATCHED("watched");

    public final String value;

    private GetVodVideosFilterEnum(String value) {
        this.value = value;
    }
}
