package openapisdk.models.shared;



/**
 * InappPurchase
 * An InappPurchase resource indicates the status of a user's inapp product purchase.
**/
public class InappPurchase {
    public Integer consumptionState;
    public InappPurchase withConsumptionState(Integer consumptionState) {
        this.consumptionState = consumptionState;
        return this;
    }
    public String developerPayload;
    public InappPurchase withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
    public String kind;
    public InappPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String orderId;
    public InappPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    public Integer purchaseState;
    public InappPurchase withPurchaseState(Integer purchaseState) {
        this.purchaseState = purchaseState;
        return this;
    }
    public String purchaseTime;
    public InappPurchase withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    public Integer purchaseType;
    public InappPurchase withPurchaseType(Integer purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
}