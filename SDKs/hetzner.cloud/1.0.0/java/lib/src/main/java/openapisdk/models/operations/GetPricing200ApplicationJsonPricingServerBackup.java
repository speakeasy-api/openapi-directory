package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPricing200ApplicationJsonPricingServerBackup
 * Will increase base Server costs by specific percentage
**/
public class GetPricing200ApplicationJsonPricingServerBackup {
    @JsonProperty("percentage")
    public String percentage;
    public GetPricing200ApplicationJsonPricingServerBackup withPercentage(String percentage) {
        this.percentage = percentage;
        return this;
    }
}