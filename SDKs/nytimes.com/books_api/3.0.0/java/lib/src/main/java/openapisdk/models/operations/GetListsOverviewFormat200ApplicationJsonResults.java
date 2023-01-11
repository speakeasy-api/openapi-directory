package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsOverviewFormat200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestsellers_date")
    public String bestsellersDate;
    public GetListsOverviewFormat200ApplicationJsonResults withBestsellersDate(String bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lists")
    public GetListsOverviewFormat200ApplicationJsonResultsLists[] lists;
    public GetListsOverviewFormat200ApplicationJsonResults withLists(GetListsOverviewFormat200ApplicationJsonResultsLists[] lists) {
        this.lists = lists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public GetListsOverviewFormat200ApplicationJsonResults withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
}