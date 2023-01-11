package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductsCustomBatchRequestEntry
 * A batch entry encoding a single non-batch products request.
**/
public class ProductsCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public ProductsCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public ProductsCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public ProductsCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public Product product;
    public ProductsCustomBatchRequestEntry withProduct(Product product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ProductsCustomBatchRequestEntry withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}