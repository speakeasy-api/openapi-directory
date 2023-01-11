package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public PosCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory")
    public PosInventory inventory;
    public PosCustomBatchRequestEntry withInventory(PosInventory inventory) {
        this.inventory = inventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public PosCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PosCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sale")
    public PosSale sale;
    public PosCustomBatchRequestEntry withSale(PosSale sale) {
        this.sale = sale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("store")
    public PosStore store;
    public PosCustomBatchRequestEntry withStore(PosStore store) {
        this.store = store;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCode")
    public String storeCode;
    public PosCustomBatchRequestEntry withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetMerchantId")
    public String targetMerchantId;
    public PosCustomBatchRequestEntry withTargetMerchantId(String targetMerchantId) {
        this.targetMerchantId = targetMerchantId;
        return this;
    }
}