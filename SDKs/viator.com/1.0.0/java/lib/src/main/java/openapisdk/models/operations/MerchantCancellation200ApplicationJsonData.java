package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantCancellation200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelItems")
    public MerchantCancellation200ApplicationJsonDataCancelItems[] cancelItems;
    public MerchantCancellation200ApplicationJsonData withCancelItems(MerchantCancellation200ApplicationJsonDataCancelItems[] cancelItems) {
        this.cancelItems = cancelItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public MerchantCancellation200ApplicationJsonData withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public MerchantCancellation200ApplicationJsonData withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
}