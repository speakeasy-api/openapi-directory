package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsOverviewFormat200ApplicationJsonResultsLists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("books")
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks[] books;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withBooks(GetListsOverviewFormat200ApplicationJsonResultsListsBooks[] books) {
        this.books = books;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_id")
    public Long listId;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withListId(Long listId) {
        this.listId = listId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_image")
    public String listImage;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withListImage(String listImage) {
        this.listImage = listImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name")
    public String listName;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public GetListsOverviewFormat200ApplicationJsonResultsLists withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}