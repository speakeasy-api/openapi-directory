package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PurchasableSku
 * SKU that you can purchase. This is used in ListPurchasableSku API response.
**/
public class GoogleCloudChannelV1PurchasableSku {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public GoogleCloudChannelV1Sku sku;
    public GoogleCloudChannelV1PurchasableSku withSku(GoogleCloudChannelV1Sku sku) {
        this.sku = sku;
        return this;
    }
}