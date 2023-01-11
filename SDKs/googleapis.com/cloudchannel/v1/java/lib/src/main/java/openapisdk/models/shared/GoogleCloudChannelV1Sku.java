package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Sku
 * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
**/
public class GoogleCloudChannelV1Sku {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingInfo")
    public GoogleCloudChannelV1MarketingInfo marketingInfo;
    public GoogleCloudChannelV1Sku withMarketingInfo(GoogleCloudChannelV1MarketingInfo marketingInfo) {
        this.marketingInfo = marketingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Sku withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public GoogleCloudChannelV1Product product;
    public GoogleCloudChannelV1Sku withProduct(GoogleCloudChannelV1Product product) {
        this.product = product;
        return this;
    }
}