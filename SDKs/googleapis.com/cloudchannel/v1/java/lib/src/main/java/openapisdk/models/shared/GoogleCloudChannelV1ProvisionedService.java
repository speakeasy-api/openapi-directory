package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ProvisionedService
 * Service provisioned for an entitlement.
**/
public class GoogleCloudChannelV1ProvisionedService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public GoogleCloudChannelV1ProvisionedService withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningId")
    public String provisioningId;
    public GoogleCloudChannelV1ProvisionedService withProvisioningId(String provisioningId) {
        this.provisioningId = provisioningId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuId")
    public String skuId;
    public GoogleCloudChannelV1ProvisionedService withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
}