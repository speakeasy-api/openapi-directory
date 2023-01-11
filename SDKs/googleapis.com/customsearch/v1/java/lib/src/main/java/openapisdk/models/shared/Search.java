package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Search
 * Response to a custom search request.
**/
public class Search {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, Object> context;
    public Search withContext(java.util.Map<String, Object> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Result[] items;
    public Search withItems(Result[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Search withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public Promotion[] promotions;
    public Search withPromotions(Promotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queries")
    public SearchQueries queries;
    public Search withQueries(SearchQueries queries) {
        this.queries = queries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchInformation")
    public SearchSearchInformation searchInformation;
    public Search withSearchInformation(SearchSearchInformation searchInformation) {
        this.searchInformation = searchInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spelling")
    public SearchSpelling spelling;
    public Search withSpelling(SearchSpelling spelling) {
        this.spelling = spelling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public SearchUrl url;
    public Search withUrl(SearchUrl url) {
        this.url = url;
        return this;
    }
}