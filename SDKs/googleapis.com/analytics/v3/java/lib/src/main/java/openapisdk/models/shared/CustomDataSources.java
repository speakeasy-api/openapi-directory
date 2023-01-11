package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDataSources
 * Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
**/
public class CustomDataSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CustomDataSource[] items;
    public CustomDataSources withItems(CustomDataSource[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public CustomDataSources withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomDataSources withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public CustomDataSources withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public CustomDataSources withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public CustomDataSources withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public CustomDataSources withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CustomDataSources withUsername(String username) {
        this.username = username;
        return this;
    }
}