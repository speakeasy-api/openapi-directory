package openapisdk.models.operations;


public enum YoutubeSearchListOrderEnum {
    SEARCH_SORT_UNSPECIFIED("searchSortUnspecified"),
    DATE("date"),
    RATING("rating"),
    VIEW_COUNT("viewCount"),
    RELEVANCE("relevance"),
    TITLE("title"),
    VIDEO_COUNT("videoCount");

    public final String value;

    private YoutubeSearchListOrderEnum(String value) {
        this.value = value;
    }
}
