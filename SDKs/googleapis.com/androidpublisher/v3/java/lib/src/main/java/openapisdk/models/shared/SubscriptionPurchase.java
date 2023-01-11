package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPurchase
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
public class SubscriptionPurchase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgementState")
    public Integer acknowledgementState;
    public SubscriptionPurchase withAcknowledgementState(Integer acknowledgementState) {
        this.acknowledgementState = acknowledgementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenewing")
    public Boolean autoRenewing;
    public SubscriptionPurchase withAutoRenewing(Boolean autoRenewing) {
        this.autoRenewing = autoRenewing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoResumeTimeMillis")
    public String autoResumeTimeMillis;
    public SubscriptionPurchase withAutoResumeTimeMillis(String autoResumeTimeMillis) {
        this.autoResumeTimeMillis = autoResumeTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelReason")
    public Integer cancelReason;
    public SubscriptionPurchase withCancelReason(Integer cancelReason) {
        this.cancelReason = cancelReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSurveyResult")
    public SubscriptionCancelSurveyResult cancelSurveyResult;
    public SubscriptionPurchase withCancelSurveyResult(SubscriptionCancelSurveyResult cancelSurveyResult) {
        this.cancelSurveyResult = cancelSurveyResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public SubscriptionPurchase withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerPayload")
    public String developerPayload;
    public SubscriptionPurchase withDeveloperPayload(String developerPayload) {
        this.developerPayload = developerPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public SubscriptionPurchase withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTimeMillis")
    public String expiryTimeMillis;
    public SubscriptionPurchase withExpiryTimeMillis(String expiryTimeMillis) {
        this.expiryTimeMillis = expiryTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalAccountId")
    public String externalAccountId;
    public SubscriptionPurchase withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public SubscriptionPurchase withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public SubscriptionPurchase withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPriceInfo")
    public IntroductoryPriceInfo introductoryPriceInfo;
    public SubscriptionPurchase withIntroductoryPriceInfo(IntroductoryPriceInfo introductoryPriceInfo) {
        this.introductoryPriceInfo = introductoryPriceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SubscriptionPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedPurchaseToken")
    public String linkedPurchaseToken;
    public SubscriptionPurchase withLinkedPurchaseToken(String linkedPurchaseToken) {
        this.linkedPurchaseToken = linkedPurchaseToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalAccountId")
    public String obfuscatedExternalAccountId;
    public SubscriptionPurchase withObfuscatedExternalAccountId(String obfuscatedExternalAccountId) {
        this.obfuscatedExternalAccountId = obfuscatedExternalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalProfileId")
    public String obfuscatedExternalProfileId;
    public SubscriptionPurchase withObfuscatedExternalProfileId(String obfuscatedExternalProfileId) {
        this.obfuscatedExternalProfileId = obfuscatedExternalProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public SubscriptionPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentState")
    public Integer paymentState;
    public SubscriptionPurchase withPaymentState(Integer paymentState) {
        this.paymentState = paymentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceAmountMicros")
    public String priceAmountMicros;
    public SubscriptionPurchase withPriceAmountMicros(String priceAmountMicros) {
        this.priceAmountMicros = priceAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChange")
    public SubscriptionPriceChange priceChange;
    public SubscriptionPurchase withPriceChange(SubscriptionPriceChange priceChange) {
        this.priceChange = priceChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceCurrencyCode")
    public String priceCurrencyCode;
    public SubscriptionPurchase withPriceCurrencyCode(String priceCurrencyCode) {
        this.priceCurrencyCode = priceCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public SubscriptionPurchase withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileName")
    public String profileName;
    public SubscriptionPurchase withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionCode")
    public String promotionCode;
    public SubscriptionPurchase withPromotionCode(String promotionCode) {
        this.promotionCode = promotionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public Integer promotionType;
    public SubscriptionPurchase withPromotionType(Integer promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseType")
    public Integer purchaseType;
    public SubscriptionPurchase withPurchaseType(Integer purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeMillis")
    public String startTimeMillis;
    public SubscriptionPurchase withStartTimeMillis(String startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCancellationTimeMillis")
    public String userCancellationTimeMillis;
    public SubscriptionPurchase withUserCancellationTimeMillis(String userCancellationTimeMillis) {
        this.userCancellationTimeMillis = userCancellationTimeMillis;
        return this;
    }
}