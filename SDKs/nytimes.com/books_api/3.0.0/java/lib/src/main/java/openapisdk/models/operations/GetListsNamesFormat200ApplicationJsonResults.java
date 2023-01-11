package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsNamesFormat200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetListsNamesFormat200ApplicationJsonResults withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name")
    public String listName;
    public GetListsNamesFormat200ApplicationJsonResults withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name_encoded")
    public String listNameEncoded;
    public GetListsNamesFormat200ApplicationJsonResults withListNameEncoded(String listNameEncoded) {
        this.listNameEncoded = listNameEncoded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newest_published_date")
    public String newestPublishedDate;
    public GetListsNamesFormat200ApplicationJsonResults withNewestPublishedDate(String newestPublishedDate) {
        this.newestPublishedDate = newestPublishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldest_published_date")
    public String oldestPublishedDate;
    public GetListsNamesFormat200ApplicationJsonResults withOldestPublishedDate(String oldestPublishedDate) {
        this.oldestPublishedDate = oldestPublishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public GetListsNamesFormat200ApplicationJsonResults withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}