package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaDocumentInfo
 * Detailed document information associated with a user event.
**/
public class GoogleCloudDiscoveryengineV1alphaDocumentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1alphaDocumentInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDiscoveryengineV1alphaDocumentInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionIds")
    public String[] promotionIds;
    public GoogleCloudDiscoveryengineV1alphaDocumentInfo withPromotionIds(String[] promotionIds) {
        this.promotionIds = promotionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public GoogleCloudDiscoveryengineV1alphaDocumentInfo withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}