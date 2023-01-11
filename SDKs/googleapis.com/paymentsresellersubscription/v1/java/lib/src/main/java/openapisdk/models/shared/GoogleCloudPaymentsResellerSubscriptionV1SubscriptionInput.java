package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput
 * A Subscription resource managed by 3P Partners.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails cancellationDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withCancellationDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails cancellationDetails) {
        this.cancellationDetails = cancellationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[] lineItems;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withLineItems(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerUserToken")
    public String partnerUserToken;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withPartnerUserToken(String partnerUserToken) {
        this.partnerUserToken = partnerUserToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public String[] products;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withProducts(String[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[] promotionSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withPromotionSpecs(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[] promotionSpecs) {
        this.promotionSpecs = promotionSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public String[] promotions;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withPromotions(String[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLocation")
    public GoogleCloudPaymentsResellerSubscriptionV1Location serviceLocation;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withServiceLocation(GoogleCloudPaymentsResellerSubscriptionV1Location serviceLocation) {
        this.serviceLocation = serviceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeDowngradeDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails upgradeDowngradeDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput withUpgradeDowngradeDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails upgradeDowngradeDetails) {
        this.upgradeDowngradeDetails = upgradeDowngradeDetails;
        return this;
    }
}