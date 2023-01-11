package openapisdk.models.operations;


public enum GetSearchJsonFieldsEnum {
    ALL("all"),
    PAGES("pages"),
    TICKER_SYMBOL("ticker_symbol"),
    LINKS("links"),
    TAXONOMY("taxonomy"),
    COMBINATIONS("combinations"),
    GEOCODES("geocodes"),
    ARTICLE_LIST("article_list"),
    SCOPE_NOTES("scope_notes"),
    SEARCH_API_QUERY("search_api_query");

    public final String value;

    private GetSearchJsonFieldsEnum(String value) {
        this.value = value;
    }
}
