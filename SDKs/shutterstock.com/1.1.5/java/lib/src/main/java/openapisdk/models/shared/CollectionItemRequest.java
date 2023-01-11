package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectionItemRequest
 * Request to get a list of items in a collection
**/
public class CollectionItemRequest {
    @JsonProperty("items")
    public CollectionItem[] items;
    public CollectionItemRequest withItems(CollectionItem[] items) {
        this.items = items;
        return this;
    }
}