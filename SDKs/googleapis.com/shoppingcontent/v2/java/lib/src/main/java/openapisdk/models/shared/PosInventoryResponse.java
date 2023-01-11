package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosInventoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public PosInventoryResponse withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String gtin;
    public PosInventoryResponse withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public PosInventoryResponse withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PosInventoryResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public PosInventoryResponse withPrice(Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public PosInventoryResponse withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCode")
    public String storeCode;
    public PosInventoryResponse withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;
    public PosInventoryResponse withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public PosInventoryResponse withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}