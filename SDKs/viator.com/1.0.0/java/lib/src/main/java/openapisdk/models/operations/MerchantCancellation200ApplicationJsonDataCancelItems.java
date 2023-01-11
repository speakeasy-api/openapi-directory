package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantCancellation200ApplicationJsonDataCancelItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationResponseDescription")
    public String cancellationResponseDescription;
    public MerchantCancellation200ApplicationJsonDataCancelItems withCancellationResponseDescription(String cancellationResponseDescription) {
        this.cancellationResponseDescription = cancellationResponseDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationResponseStatusCode")
    public String cancellationResponseStatusCode;
    public MerchantCancellation200ApplicationJsonDataCancelItems withCancellationResponseStatusCode(String cancellationResponseStatusCode) {
        this.cancellationResponseStatusCode = cancellationResponseStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public MerchantCancellation200ApplicationJsonDataCancelItems withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public MerchantCancellation200ApplicationJsonDataCancelItems withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}