package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantCancellationRequestBodyCancelItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelCode")
    public String cancelCode;
    public MerchantCancellationRequestBodyCancelItems withCancelCode(String cancelCode) {
        this.cancelCode = cancelCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelDescription")
    public String cancelDescription;
    public MerchantCancellationRequestBodyCancelItems withCancelDescription(String cancelDescription) {
        this.cancelDescription = cancelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public MerchantCancellationRequestBodyCancelItems withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public Long itemId;
    public MerchantCancellationRequestBodyCancelItems withItemId(Long itemId) {
        this.itemId = itemId;
        return this;
    }
}