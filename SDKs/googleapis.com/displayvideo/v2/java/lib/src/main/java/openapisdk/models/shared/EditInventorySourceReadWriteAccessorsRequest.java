package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditInventorySourceReadWriteAccessorsRequest
 * Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
**/
public class EditInventorySourceReadWriteAccessorsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisersUpdate")
    public EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate advertisersUpdate;
    public EditInventorySourceReadWriteAccessorsRequest withAdvertisersUpdate(EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate advertisersUpdate) {
        this.advertisersUpdate = advertisersUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignPartner")
    public Boolean assignPartner;
    public EditInventorySourceReadWriteAccessorsRequest withAssignPartner(Boolean assignPartner) {
        this.assignPartner = assignPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public EditInventorySourceReadWriteAccessorsRequest withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}