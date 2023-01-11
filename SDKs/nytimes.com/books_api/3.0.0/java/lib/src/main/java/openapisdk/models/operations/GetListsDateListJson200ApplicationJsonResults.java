package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsDateListJson200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestsellers_date")
    public String bestsellersDate;
    public GetListsDateListJson200ApplicationJsonResults withBestsellersDate(String bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("books")
    public GetListsDateListJson200ApplicationJsonResultsBooks[] books;
    public GetListsDateListJson200ApplicationJsonResults withBooks(GetListsDateListJson200ApplicationJsonResultsBooks[] books) {
        this.books = books;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corrections")
    public java.util.Map<String, Object>[] corrections;
    public GetListsDateListJson200ApplicationJsonResults withCorrections(java.util.Map<String, Object>[] corrections) {
        this.corrections = corrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetListsDateListJson200ApplicationJsonResults withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name")
    public String listName;
    public GetListsDateListJson200ApplicationJsonResults withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normal_list_ends_at")
    public Long normalListEndsAt;
    public GetListsDateListJson200ApplicationJsonResults withNormalListEndsAt(Long normalListEndsAt) {
        this.normalListEndsAt = normalListEndsAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public GetListsDateListJson200ApplicationJsonResults withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public GetListsDateListJson200ApplicationJsonResults withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}