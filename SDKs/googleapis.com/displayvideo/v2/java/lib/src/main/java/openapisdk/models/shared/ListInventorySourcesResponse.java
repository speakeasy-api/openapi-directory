package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInventorySourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySources")
    public InventorySource[] inventorySources;
    public ListInventorySourcesResponse withInventorySources(InventorySource[] inventorySources) {
        this.inventorySources = inventorySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInventorySourcesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}