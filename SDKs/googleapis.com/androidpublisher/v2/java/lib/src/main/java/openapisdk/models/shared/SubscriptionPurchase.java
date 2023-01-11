package openapisdk.models.shared;



/**
 * SubscriptionPurchase
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
public class SubscriptionPurchase {
    public Boolean autoRenewing;
    public SubscriptionPurchase withAutoRenewing(Boolean autoRenewing) {
        this.autoRenewing = autoRenewing;
        return this;
    }
    public Integer cancelReason;
    public SubscriptionPurchase withCancelReason(Integer cancelReason) {
        this.cancelReason = cancelReason;
        return this;
    }
    public SubscriptionCancelSurveyResult cancelSurveyResult;
    public SubscriptionPurchase withCancelSurveyResult(SubscriptionCancelSurveyResult cancelSurveyResult) {
        this.cancelSurveyResult = cancelSurveyResult;
        return this;
    }
    public String countryCode;
    public SubscriptionPurchase withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    public String developerPayload;
    public SubscriptionPurchase withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
    public String emailAddress;
    public SubscriptionPurchase withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    public String expiryTimeMillis;
    public SubscriptionPurchase withExpiryTimeMillis(String expiryTimeMillis) {
        this.expiryTimeMillis = expiryTimeMillis;
        return this;
    }
    public String familyName;
    public SubscriptionPurchase withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    public String givenName;
    public SubscriptionPurchase withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    public String kind;
    public SubscriptionPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String linkedPurchaseToken;
    public SubscriptionPurchase withLinkedPurchaseToken(String linkedPurchaseToken) {
        this.linkedPurchaseToken = linkedPurchaseToken;
        return this;
    }
    public String orderId;
    public SubscriptionPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    public Integer paymentState;
    public SubscriptionPurchase withPaymentState(Integer paymentState) {
        this.paymentState = paymentState;
        return this;
    }
    public String priceAmountMicros;
    public SubscriptionPurchase withPriceAmountMicros(String priceAmountMicros) {
        this.priceAmountMicros = priceAmountMicros;
        return this;
    }
    public SubscriptionPriceChange priceChange;
    public SubscriptionPurchase withPriceChange(SubscriptionPriceChange priceChange) {
        this.priceChange = priceChange;
        return this;
    }
    public String priceCurrencyCode;
    public SubscriptionPurchase withPriceCurrencyCode(String priceCurrencyCode) {
        this.priceCurrencyCode = priceCurrencyCode;
        return this;
    }
    public String profileId;
    public SubscriptionPurchase withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    public String profileName;
    public SubscriptionPurchase withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
    public Integer purchaseType;
    public SubscriptionPurchase withPurchaseType(Integer purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
    public String startTimeMillis;
    public SubscriptionPurchase withStartTimeMillis(String startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
    public String userCancellationTimeMillis;
    public SubscriptionPurchase withUserCancellationTimeMillis(String userCancellationTimeMillis) {
        this.userCancellationTimeMillis = userCancellationTimeMillis;
        return this;
    }
}