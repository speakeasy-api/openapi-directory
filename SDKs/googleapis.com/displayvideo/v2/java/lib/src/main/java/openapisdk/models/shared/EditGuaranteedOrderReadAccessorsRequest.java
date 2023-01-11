package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditGuaranteedOrderReadAccessorsRequest
 * Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
**/
public class EditGuaranteedOrderReadAccessorsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedAdvertisers")
    public String[] addedAdvertisers;
    public EditGuaranteedOrderReadAccessorsRequest withAddedAdvertisers(String[] addedAdvertisers) {
        this.addedAdvertisers = addedAdvertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public EditGuaranteedOrderReadAccessorsRequest withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readAccessInherited")
    public Boolean readAccessInherited;
    public EditGuaranteedOrderReadAccessorsRequest withReadAccessInherited(Boolean readAccessInherited) {
        this.readAccessInherited = readAccessInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedAdvertisers")
    public String[] removedAdvertisers;
    public EditGuaranteedOrderReadAccessorsRequest withRemovedAdvertisers(String[] removedAdvertisers) {
        this.removedAdvertisers = removedAdvertisers;
        return this;
    }
}