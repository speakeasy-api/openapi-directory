package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLinks
 * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
**/
public class EntityUserLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public EntityUserLink[] items;
    public EntityUserLinks withItems(EntityUserLink[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public EntityUserLinks withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EntityUserLinks withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public EntityUserLinks withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public EntityUserLinks withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public EntityUserLinks withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public EntityUserLinks withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}