package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsUpdateNotificationsRequest {
    public MybusinessAccountsUpdateNotificationsPathParams pathParams;
    public MybusinessAccountsUpdateNotificationsRequest withPathParams(MybusinessAccountsUpdateNotificationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsUpdateNotificationsQueryParams queryParams;
    public MybusinessAccountsUpdateNotificationsRequest withQueryParams(MybusinessAccountsUpdateNotificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Notifications request;
    public MybusinessAccountsUpdateNotificationsRequest withRequest(openapisdk.models.shared.Notifications request) {
        this.request = request;
        return this;
    }
}