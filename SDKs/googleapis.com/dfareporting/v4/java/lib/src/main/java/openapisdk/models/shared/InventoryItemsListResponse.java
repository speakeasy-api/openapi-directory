package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryItemsListResponse
 * Inventory item List Response
**/
public class InventoryItemsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryItems")
    public InventoryItem[] inventoryItems;
    public InventoryItemsListResponse withInventoryItems(InventoryItem[] inventoryItems) {
        this.inventoryItems = inventoryItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InventoryItemsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public InventoryItemsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}