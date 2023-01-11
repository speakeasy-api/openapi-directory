package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileFilterLinks
 * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
**/
public class ProfileFilterLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ProfileFilterLink[] items;
    public ProfileFilterLinks withItems(ProfileFilterLink[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerPage")
    public Integer itemsPerPage;
    public ProfileFilterLinks withItemsPerPage(Integer itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProfileFilterLinks withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public ProfileFilterLinks withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousLink")
    public String previousLink;
    public ProfileFilterLinks withPreviousLink(String previousLink) {
        this.previousLink = previousLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public ProfileFilterLinks withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public ProfileFilterLinks withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ProfileFilterLinks withUsername(String username) {
        this.username = username;
        return this;
    }
}