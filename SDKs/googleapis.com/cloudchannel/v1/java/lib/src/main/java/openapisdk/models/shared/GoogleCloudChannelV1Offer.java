package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Offer
 * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
**/
public class GoogleCloudChannelV1Offer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public GoogleCloudChannelV1Constraints constraints;
    public GoogleCloudChannelV1Offer withConstraints(GoogleCloudChannelV1Constraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealCode")
    public String dealCode;
    public GoogleCloudChannelV1Offer withDealCode(String dealCode) {
        this.dealCode = dealCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudChannelV1Offer withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingInfo")
    public GoogleCloudChannelV1MarketingInfo marketingInfo;
    public GoogleCloudChannelV1Offer withMarketingInfo(GoogleCloudChannelV1MarketingInfo marketingInfo) {
        this.marketingInfo = marketingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Offer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterDefinitions")
    public GoogleCloudChannelV1ParameterDefinition[] parameterDefinitions;
    public GoogleCloudChannelV1Offer withParameterDefinitions(GoogleCloudChannelV1ParameterDefinition[] parameterDefinitions) {
        this.parameterDefinitions = parameterDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public GoogleCloudChannelV1Plan plan;
    public GoogleCloudChannelV1Offer withPlan(GoogleCloudChannelV1Plan plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceByResources")
    public GoogleCloudChannelV1PriceByResource[] priceByResources;
    public GoogleCloudChannelV1Offer withPriceByResources(GoogleCloudChannelV1PriceByResource[] priceByResources) {
        this.priceByResources = priceByResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public GoogleCloudChannelV1Sku sku;
    public GoogleCloudChannelV1Offer withSku(GoogleCloudChannelV1Sku sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudChannelV1Offer withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}