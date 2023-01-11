package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantCancellation400ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationResponseDescription")
    public String cancellationResponseDescription;
    public MerchantCancellation400ApplicationJsonData withCancellationResponseDescription(String cancellationResponseDescription) {
        this.cancellationResponseDescription = cancellationResponseDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationResponseStatusCode")
    public String cancellationResponseStatusCode;
    public MerchantCancellation400ApplicationJsonData withCancellationResponseStatusCode(String cancellationResponseStatusCode) {
        this.cancellationResponseStatusCode = cancellationResponseStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public MerchantCancellation400ApplicationJsonData withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public MerchantCancellation400ApplicationJsonData withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}