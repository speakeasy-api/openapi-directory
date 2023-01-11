package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPurchaseV2
 * Indicates the status of a user's subscription purchase.
**/
public class SubscriptionPurchaseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgementState")
    public SubscriptionPurchaseV2AcknowledgementStateEnum acknowledgementState;
    public SubscriptionPurchaseV2 withAcknowledgementState(SubscriptionPurchaseV2AcknowledgementStateEnum acknowledgementState) {
        this.acknowledgementState = acknowledgementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canceledStateContext")
    public CanceledStateContext canceledStateContext;
    public SubscriptionPurchaseV2 withCanceledStateContext(CanceledStateContext canceledStateContext) {
        this.canceledStateContext = canceledStateContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalAccountIdentifiers")
    public ExternalAccountIdentifiers externalAccountIdentifiers;
    public SubscriptionPurchaseV2 withExternalAccountIdentifiers(ExternalAccountIdentifiers externalAccountIdentifiers) {
        this.externalAccountIdentifiers = externalAccountIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SubscriptionPurchaseV2 withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestOrderId")
    public String latestOrderId;
    public SubscriptionPurchaseV2 withLatestOrderId(String latestOrderId) {
        this.latestOrderId = latestOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public SubscriptionPurchaseLineItem[] lineItems;
    public SubscriptionPurchaseV2 withLineItems(SubscriptionPurchaseLineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedPurchaseToken")
    public String linkedPurchaseToken;
    public SubscriptionPurchaseV2 withLinkedPurchaseToken(String linkedPurchaseToken) {
        this.linkedPurchaseToken = linkedPurchaseToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausedStateContext")
    public PausedStateContext pausedStateContext;
    public SubscriptionPurchaseV2 withPausedStateContext(PausedStateContext pausedStateContext) {
        this.pausedStateContext = pausedStateContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public SubscriptionPurchaseV2 withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public SubscriptionPurchaseV2 withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribeWithGoogleInfo")
    public SubscribeWithGoogleInfo subscribeWithGoogleInfo;
    public SubscriptionPurchaseV2 withSubscribeWithGoogleInfo(SubscribeWithGoogleInfo subscribeWithGoogleInfo) {
        this.subscribeWithGoogleInfo = subscribeWithGoogleInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionState")
    public SubscriptionPurchaseV2SubscriptionStateEnum subscriptionState;
    public SubscriptionPurchaseV2 withSubscriptionState(SubscriptionPurchaseV2SubscriptionStateEnum subscriptionState) {
        this.subscriptionState = subscriptionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testPurchase")
    public java.util.Map<String, Object> testPurchase;
    public SubscriptionPurchaseV2 withTestPurchase(java.util.Map<String, Object> testPurchase) {
        this.testPurchase = testPurchase;
        return this;
    }
}