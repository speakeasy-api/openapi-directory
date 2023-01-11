package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsRegisterRequest {
    public CloudchannelAccountsRegisterPathParams pathParams;
    public CloudchannelAccountsRegisterRequest withPathParams(CloudchannelAccountsRegisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsRegisterQueryParams queryParams;
    public CloudchannelAccountsRegisterRequest withQueryParams(CloudchannelAccountsRegisterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1RegisterSubscriberRequest request;
    public CloudchannelAccountsRegisterRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1RegisterSubscriberRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsRegisterSecurity security;
    public CloudchannelAccountsRegisterRequest withSecurity(CloudchannelAccountsRegisterSecurity security) {
        this.security = security;
        return this;
    }
}