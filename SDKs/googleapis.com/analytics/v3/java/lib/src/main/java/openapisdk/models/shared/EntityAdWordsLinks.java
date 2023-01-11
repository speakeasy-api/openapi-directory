package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityAdWordsLinks
 * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
**/
public class EntityAdWordsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public EntityAdWordsLink[] items;
    public EntityAdWordsLinks withItems(EntityAdWordsLink[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public EntityAdWordsLinks withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EntityAdWordsLinks withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public EntityAdWordsLinks withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public EntityAdWordsLinks withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public EntityAdWordsLinks withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public EntityAdWordsLinks withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}