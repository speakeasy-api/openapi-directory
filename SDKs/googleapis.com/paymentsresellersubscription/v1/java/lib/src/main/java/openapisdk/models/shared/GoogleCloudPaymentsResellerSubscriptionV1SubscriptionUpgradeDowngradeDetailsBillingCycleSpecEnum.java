package openapisdk.models.shared;


public enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum {
    BILLING_CYCLE_SPEC_UNSPECIFIED("BILLING_CYCLE_SPEC_UNSPECIFIED"),
    BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION("BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION"),
    BILLING_CYCLE_SPEC_START_IMMEDIATELY("BILLING_CYCLE_SPEC_START_IMMEDIATELY");

    public final String value;

    private GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum(String value) {
        this.value = value;
    }
}
