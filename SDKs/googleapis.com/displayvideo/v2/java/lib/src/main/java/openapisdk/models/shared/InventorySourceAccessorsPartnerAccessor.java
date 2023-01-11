package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceAccessorsPartnerAccessor
 * The partner with access to the inventory source.
**/
public class InventorySourceAccessorsPartnerAccessor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public InventorySourceAccessorsPartnerAccessor withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}