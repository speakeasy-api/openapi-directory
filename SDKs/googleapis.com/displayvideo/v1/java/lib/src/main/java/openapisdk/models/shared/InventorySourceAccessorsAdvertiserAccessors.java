package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceAccessorsAdvertiserAccessors
 * The advertisers with access to the inventory source.
**/
public class InventorySourceAccessorsAdvertiserAccessors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIds")
    public String[] advertiserIds;
    public InventorySourceAccessorsAdvertiserAccessors withAdvertiserIds(String[] advertiserIds) {
        this.advertiserIds = advertiserIds;
        return this;
    }
}