package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public PosCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public PosCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory")
    public PosInventory inventory;
    public PosCustomBatchResponseEntry withInventory(PosInventory inventory) {
        this.inventory = inventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PosCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sale")
    public PosSale sale;
    public PosCustomBatchResponseEntry withSale(PosSale sale) {
        this.sale = sale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("store")
    public PosStore store;
    public PosCustomBatchResponseEntry withStore(PosStore store) {
        this.store = store;
        return this;
    }
}