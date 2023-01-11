package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsChangeSeatsRequest {
    public ResellerSubscriptionsChangeSeatsPathParams pathParams;
    public ResellerSubscriptionsChangeSeatsRequest withPathParams(ResellerSubscriptionsChangeSeatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsChangeSeatsQueryParams queryParams;
    public ResellerSubscriptionsChangeSeatsRequest withQueryParams(ResellerSubscriptionsChangeSeatsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Seats request;
    public ResellerSubscriptionsChangeSeatsRequest withRequest(openapisdk.models.shared.Seats request) {
        this.request = request;
        return this;
    }
    public ResellerSubscriptionsChangeSeatsSecurity security;
    public ResellerSubscriptionsChangeSeatsRequest withSecurity(ResellerSubscriptionsChangeSeatsSecurity security) {
        this.security = security;
        return this;
    }
}