package openapisdk.models.shared;



/**
 * ProductPurchase
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
public class ProductPurchase {
    public Integer consumptionState;
    public ProductPurchase withConsumptionState(Integer consumptionState) {
        this.consumptionState = consumptionState;
        return this;
    }
    public String developerPayload;
    public ProductPurchase withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
    public String kind;
    public ProductPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String orderId;
    public ProductPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    public Integer purchaseState;
    public ProductPurchase withPurchaseState(Integer purchaseState) {
        this.purchaseState = purchaseState;
        return this;
    }
    public String purchaseTimeMillis;
    public ProductPurchase withPurchaseTimeMillis(String purchaseTimeMillis) {
        this.purchaseTimeMillis = purchaseTimeMillis;
        return this;
    }
    public Integer purchaseType;
    public ProductPurchase withPurchaseType(Integer purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
}