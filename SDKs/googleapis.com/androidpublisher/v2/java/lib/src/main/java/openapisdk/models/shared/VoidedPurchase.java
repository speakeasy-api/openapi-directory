package openapisdk.models.shared;



/**
 * VoidedPurchase
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
public class VoidedPurchase {
    public String kind;
    public VoidedPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String purchaseTimeMillis;
    public VoidedPurchase withPurchaseTimeMillis(String purchaseTimeMillis) {
        this.purchaseTimeMillis = purchaseTimeMillis;
        return this;
    }
    public String purchaseToken;
    public VoidedPurchase withPurchaseToken(String purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    }
    public String voidedTimeMillis;
    public VoidedPurchase withVoidedTimeMillis(String voidedTimeMillis) {
        this.voidedTimeMillis = voidedTimeMillis;
        return this;
    }
}