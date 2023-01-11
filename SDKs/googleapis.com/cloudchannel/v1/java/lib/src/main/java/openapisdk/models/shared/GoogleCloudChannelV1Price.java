package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Price
 * Represents the price of the Offer.
**/
public class GoogleCloudChannelV1Price {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePrice")
    public GoogleTypeMoney basePrice;
    public GoogleCloudChannelV1Price withBasePrice(GoogleTypeMoney basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Double discount;
    public GoogleCloudChannelV1Price withDiscount(Double discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectivePrice")
    public GoogleTypeMoney effectivePrice;
    public GoogleCloudChannelV1Price withEffectivePrice(GoogleTypeMoney effectivePrice) {
        this.effectivePrice = effectivePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalPriceUri")
    public String externalPriceUri;
    public GoogleCloudChannelV1Price withExternalPriceUri(String externalPriceUri) {
        this.externalPriceUri = externalPriceUri;
        return this;
    }
}