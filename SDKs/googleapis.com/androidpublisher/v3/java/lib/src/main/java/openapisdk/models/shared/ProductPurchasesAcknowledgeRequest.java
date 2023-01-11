package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductPurchasesAcknowledgeRequest
 * Request for the product.purchases.acknowledge API.
**/
public class ProductPurchasesAcknowledgeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerPayload")
    public String developerPayload;
    public ProductPurchasesAcknowledgeRequest withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
}