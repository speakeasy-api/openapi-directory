package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput
 * Individual line item definition of a subscription.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemPromotionSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[] lineItemPromotionSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput withLineItemPromotionSpecs(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[] lineItemPromotionSpecs) {
        this.lineItemPromotionSpecs = lineItemPromotionSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeRecurrenceDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails oneTimeRecurrenceDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput withOneTimeRecurrenceDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails oneTimeRecurrenceDetails) {
        this.oneTimeRecurrenceDetails = oneTimeRecurrenceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public String product;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput withProduct(String product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPayload")
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPayload productPayload;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput withProductPayload(GoogleCloudPaymentsResellerSubscriptionV1ProductPayload productPayload) {
        this.productPayload = productPayload;
        return this;
    }
}