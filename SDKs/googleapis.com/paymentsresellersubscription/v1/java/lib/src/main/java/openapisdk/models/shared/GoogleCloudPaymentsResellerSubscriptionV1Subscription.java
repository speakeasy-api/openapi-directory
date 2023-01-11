package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Subscription
 * A Subscription resource managed by 3P Partners.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails cancellationDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withCancellationDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails cancellationDetails) {
        this.cancellationDetails = cancellationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleEndTime")
    public String cycleEndTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withCycleEndTime(String cycleEndTime) {
        this.cycleEndTime = cycleEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endUserEntitled")
    public Boolean endUserEntitled;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withEndUserEntitled(Boolean endUserEntitled) {
        this.endUserEntitled = endUserEntitled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeTrialEndTime")
    public String freeTrialEndTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withFreeTrialEndTime(String freeTrialEndTime) {
        this.freeTrialEndTime = freeTrialEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[] lineItems;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withLineItems(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerUserToken")
    public String partnerUserToken;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withPartnerUserToken(String partnerUserToken) {
        this.partnerUserToken = partnerUserToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingState")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum processingState;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withProcessingState(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public String[] products;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withProducts(String[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[] promotionSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withPromotionSpecs(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[] promotionSpecs) {
        this.promotionSpecs = promotionSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public String[] promotions;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withPromotions(String[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTime")
    public String renewalTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withRenewalTime(String renewalTime) {
        this.renewalTime = renewalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLocation")
    public GoogleCloudPaymentsResellerSubscriptionV1Location serviceLocation;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withServiceLocation(GoogleCloudPaymentsResellerSubscriptionV1Location serviceLocation) {
        this.serviceLocation = serviceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum state;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withState(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeDowngradeDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails upgradeDowngradeDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription withUpgradeDowngradeDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails upgradeDowngradeDetails) {
        this.upgradeDowngradeDetails = upgradeDowngradeDetails;
        return this;
    }
}