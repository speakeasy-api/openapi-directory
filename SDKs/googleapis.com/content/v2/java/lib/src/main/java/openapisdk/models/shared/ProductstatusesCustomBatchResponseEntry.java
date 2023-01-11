package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductstatusesCustomBatchResponseEntry
 * A batch entry encoding a single non-batch productstatuses response.
**/
public class ProductstatusesCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public ProductstatusesCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public ProductstatusesCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProductstatusesCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productStatus")
    public ProductStatus productStatus;
    public ProductstatusesCustomBatchResponseEntry withProductStatus(ProductStatus productStatus) {
        this.productStatus = productStatus;
        return this;
    }
}