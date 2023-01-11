package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceAccessors
 * The partner or advertisers with access to the inventory source.
**/
public class InventorySourceAccessors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisers")
    public InventorySourceAccessorsAdvertiserAccessors advertisers;
    public InventorySourceAccessors withAdvertisers(InventorySourceAccessorsAdvertiserAccessors advertisers) {
        this.advertisers = advertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public InventorySourceAccessorsPartnerAccessor partner;
    public InventorySourceAccessors withPartner(InventorySourceAccessorsPartnerAccessor partner) {
        this.partner = partner;
        return this;
    }
}