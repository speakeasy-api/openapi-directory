package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
 * Configs the prices in an available region.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public GoogleCloudPaymentsResellerSubscriptionV1Amount amount;
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig withAmount(GoogleCloudPaymentsResellerSubscriptionV1Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}