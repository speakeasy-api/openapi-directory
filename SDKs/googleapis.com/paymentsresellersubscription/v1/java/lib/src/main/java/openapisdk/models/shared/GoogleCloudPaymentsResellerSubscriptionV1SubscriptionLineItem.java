package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
 * Individual line item definition of a subscription.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemFreeTrialEndTime")
    public String lineItemFreeTrialEndTime;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withLineItemFreeTrialEndTime(String lineItemFreeTrialEndTime) {
        this.lineItemFreeTrialEndTime = lineItemFreeTrialEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemPromotionSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[] lineItemPromotionSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withLineItemPromotionSpecs(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[] lineItemPromotionSpecs) {
        this.lineItemPromotionSpecs = lineItemPromotionSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeRecurrenceDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails oneTimeRecurrenceDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withOneTimeRecurrenceDetails(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails oneTimeRecurrenceDetails) {
        this.oneTimeRecurrenceDetails = oneTimeRecurrenceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public String product;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withProduct(String product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPayload")
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPayload productPayload;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withProductPayload(GoogleCloudPaymentsResellerSubscriptionV1ProductPayload productPayload) {
        this.productPayload = productPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrenceType")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum recurrenceType;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withRecurrenceType(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum recurrenceType) {
        this.recurrenceType = recurrenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum state;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem withState(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum state) {
        this.state = state;
        return this;
    }
}