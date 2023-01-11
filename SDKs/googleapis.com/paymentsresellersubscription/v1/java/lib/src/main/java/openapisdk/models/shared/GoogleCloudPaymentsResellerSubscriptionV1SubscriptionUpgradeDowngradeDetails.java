package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails
 * Details about the previous subscription that this new subscription upgrades/downgrades from.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingCycleSpec")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum billingCycleSpec;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails withBillingCycleSpec(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum billingCycleSpec) {
        this.billingCycleSpec = billingCycleSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousSubscriptionId")
    public String previousSubscriptionId;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails withPreviousSubscriptionId(String previousSubscriptionId) {
        this.previousSubscriptionId = previousSubscriptionId;
        return this;
    }
}