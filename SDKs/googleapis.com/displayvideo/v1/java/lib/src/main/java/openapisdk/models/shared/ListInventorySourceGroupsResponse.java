package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInventorySourceGroupsResponse
 * Response message for InventorySourceGroupService.ListInventorySourceGroups.
**/
public class ListInventorySourceGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceGroups")
    public InventorySourceGroup[] inventorySourceGroups;
    public ListInventorySourceGroupsResponse withInventorySourceGroups(InventorySourceGroup[] inventorySourceGroups) {
        this.inventorySourceGroups = inventorySourceGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInventorySourceGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}