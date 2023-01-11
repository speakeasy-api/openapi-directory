package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PriceByResource
 * Represents price by resource type.
**/
public class GoogleCloudChannelV1PriceByResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public GoogleCloudChannelV1Price price;
    public GoogleCloudChannelV1PriceByResource withPrice(GoogleCloudChannelV1Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricePhases")
    public GoogleCloudChannelV1PricePhase[] pricePhases;
    public GoogleCloudChannelV1PriceByResource withPricePhases(GoogleCloudChannelV1PricePhase[] pricePhases) {
        this.pricePhases = pricePhases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public GoogleCloudChannelV1PriceByResourceResourceTypeEnum resourceType;
    public GoogleCloudChannelV1PriceByResource withResourceType(GoogleCloudChannelV1PriceByResourceResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}