package openapisdk.models.shared;


public enum SearchJobsRequestKeywordMatchModeEnum {
    KEYWORD_MATCH_MODE_UNSPECIFIED("KEYWORD_MATCH_MODE_UNSPECIFIED"),
    KEYWORD_MATCH_DISABLED("KEYWORD_MATCH_DISABLED"),
    KEYWORD_MATCH_ALL("KEYWORD_MATCH_ALL"),
    KEYWORD_MATCH_TITLE_ONLY("KEYWORD_MATCH_TITLE_ONLY");

    public final String value;

    private SearchJobsRequestKeywordMatchModeEnum(String value) {
        this.value = value;
    }
}
