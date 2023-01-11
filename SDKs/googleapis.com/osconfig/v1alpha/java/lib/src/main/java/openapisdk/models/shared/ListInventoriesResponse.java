package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInventoriesResponse
 * A response message for listing inventory data for all VMs in a specified location.
**/
public class ListInventoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventories")
    public Inventory[] inventories;
    public ListInventoriesResponse withInventories(Inventory[] inventories) {
        this.inventories = inventories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInventoriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}