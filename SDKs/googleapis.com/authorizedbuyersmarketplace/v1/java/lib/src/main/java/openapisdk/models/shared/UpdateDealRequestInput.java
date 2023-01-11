package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDealRequestInput
 * Request message for updating the deal at the given revision number.
**/
public class UpdateDealRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deal")
    public DealInput deal;
    public UpdateDealRequestInput withDeal(DealInput deal) {
        this.deal = deal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateDealRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}