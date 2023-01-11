package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1SkuGroupCondition
 * A condition that applies the override if a line item SKU is found in the SKU group.
**/
public class GoogleCloudChannelV1SkuGroupCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuGroup")
    public String skuGroup;
    public GoogleCloudChannelV1SkuGroupCondition withSkuGroup(String skuGroup) {
        this.skuGroup = skuGroup;
        return this;
    }
}