package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MigrateBasePlanPricesRequest request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest withRequest(openapisdk.models.shared.MigrateBasePlanPricesRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity security) {
        this.security = security;
        return this;
    }
}