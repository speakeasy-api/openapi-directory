package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatorId")
    public String aggregatorId;
    public AccountIdentifier withAggregatorId(String aggregatorId) {
        this.aggregatorId = aggregatorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public AccountIdentifier withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}