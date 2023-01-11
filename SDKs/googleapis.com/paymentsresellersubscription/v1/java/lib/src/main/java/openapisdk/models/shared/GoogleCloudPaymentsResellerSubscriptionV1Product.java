package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Product
 * A Product resource that defines a subscription service that can be resold.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPaymentsResellerSubscriptionV1Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceConfigs")
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[] priceConfigs;
    public GoogleCloudPaymentsResellerSubscriptionV1Product withPriceConfigs(GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[] priceConfigs) {
        this.priceConfigs = priceConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCodes")
    public String[] regionCodes;
    public GoogleCloudPaymentsResellerSubscriptionV1Product withRegionCodes(String[] regionCodes) {
        this.regionCodes = regionCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionBillingCycleDuration")
    public GoogleCloudPaymentsResellerSubscriptionV1Duration subscriptionBillingCycleDuration;
    public GoogleCloudPaymentsResellerSubscriptionV1Product withSubscriptionBillingCycleDuration(GoogleCloudPaymentsResellerSubscriptionV1Duration subscriptionBillingCycleDuration) {
        this.subscriptionBillingCycleDuration = subscriptionBillingCycleDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titles")
    public GoogleTypeLocalizedText[] titles;
    public GoogleCloudPaymentsResellerSubscriptionV1Product withTitles(GoogleTypeLocalizedText[] titles) {
        this.titles = titles;
        return this;
    }
}