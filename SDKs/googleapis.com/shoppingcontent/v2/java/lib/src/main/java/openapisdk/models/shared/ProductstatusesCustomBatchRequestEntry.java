package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductstatusesCustomBatchRequestEntry
 * A batch entry encoding a single non-batch productstatuses request.
**/
public class ProductstatusesCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public ProductstatusesCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public String[] destinations;
    public ProductstatusesCustomBatchRequestEntry withDestinations(String[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributes")
    public Boolean includeAttributes;
    public ProductstatusesCustomBatchRequestEntry withIncludeAttributes(Boolean includeAttributes) {
        this.includeAttributes = includeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public ProductstatusesCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public ProductstatusesCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ProductstatusesCustomBatchRequestEntry withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}