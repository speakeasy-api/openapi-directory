package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaDocumentInfo
 * Detailed document information associated with a user event.
**/
public class GoogleCloudDiscoveryengineV1betaDocumentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1betaDocumentInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDiscoveryengineV1betaDocumentInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionIds")
    public String[] promotionIds;
    public GoogleCloudDiscoveryengineV1betaDocumentInfo withPromotionIds(String[] promotionIds) {
        this.promotionIds = promotionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public GoogleCloudDiscoveryengineV1betaDocumentInfo withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}