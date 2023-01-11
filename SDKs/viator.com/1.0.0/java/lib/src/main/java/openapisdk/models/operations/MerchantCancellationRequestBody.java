package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantCancellationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelItems")
    public MerchantCancellationRequestBodyCancelItems[] cancelItems;
    public MerchantCancellationRequestBody withCancelItems(MerchantCancellationRequestBodyCancelItems[] cancelItems) {
        this.cancelItems = cancelItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public MerchantCancellationRequestBody withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public MerchantCancellationRequestBody withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
}