package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductPurchase
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
public class ProductPurchase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgementState")
    public Integer acknowledgementState;
    public ProductPurchase withAcknowledgementState(Integer acknowledgementState) {
        this.acknowledgementState = acknowledgementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumptionState")
    public Integer consumptionState;
    public ProductPurchase withConsumptionState(Integer consumptionState) {
        this.consumptionState = consumptionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerPayload")
    public String developerPayload;
    public ProductPurchase withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProductPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalAccountId")
    public String obfuscatedExternalAccountId;
    public ProductPurchase withObfuscatedExternalAccountId(String obfuscatedExternalAccountId) {
        this.obfuscatedExternalAccountId = obfuscatedExternalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalProfileId")
    public String obfuscatedExternalProfileId;
    public ProductPurchase withObfuscatedExternalProfileId(String obfuscatedExternalProfileId) {
        this.obfuscatedExternalProfileId = obfuscatedExternalProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public ProductPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ProductPurchase withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseState")
    public Integer purchaseState;
    public ProductPurchase withPurchaseState(Integer purchaseState) {
        this.purchaseState = purchaseState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseTimeMillis")
    public String purchaseTimeMillis;
    public ProductPurchase withPurchaseTimeMillis(String purchaseTimeMillis) {
        this.purchaseTimeMillis = purchaseTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseToken")
    public String purchaseToken;
    public ProductPurchase withPurchaseToken(String purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseType")
    public Integer purchaseType;
    public ProductPurchase withPurchaseType(Integer purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public ProductPurchase withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public ProductPurchase withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}