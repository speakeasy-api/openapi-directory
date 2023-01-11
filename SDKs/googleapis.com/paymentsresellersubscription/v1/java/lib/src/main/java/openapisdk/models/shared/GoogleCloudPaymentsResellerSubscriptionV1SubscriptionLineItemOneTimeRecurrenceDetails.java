package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails
 * Details for a ONE_TIME recurrence line item.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePeriod")
    public GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod servicePeriod;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails withServicePeriod(GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod servicePeriod) {
        this.servicePeriod = servicePeriod;
        return this;
    }
}