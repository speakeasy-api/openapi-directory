package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PriceTier
 * Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.
**/
public class GoogleCloudChannelV1PriceTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstResource")
    public Integer firstResource;
    public GoogleCloudChannelV1PriceTier withFirstResource(Integer firstResource) {
        this.firstResource = firstResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastResource")
    public Integer lastResource;
    public GoogleCloudChannelV1PriceTier withLastResource(Integer lastResource) {
        this.lastResource = lastResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public GoogleCloudChannelV1Price price;
    public GoogleCloudChannelV1PriceTier withPrice(GoogleCloudChannelV1Price price) {
        this.price = price;
        return this;
    }
}