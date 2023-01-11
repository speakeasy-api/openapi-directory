package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsChangeParametersRequest {
    public CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams pathParams;
    public CloudchannelAccountsCustomersEntitlementsChangeParametersRequest withPathParams(CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams queryParams;
    public CloudchannelAccountsCustomersEntitlementsChangeParametersRequest withQueryParams(CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1ChangeParametersRequestInput request;
    public CloudchannelAccountsCustomersEntitlementsChangeParametersRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1ChangeParametersRequestInput request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity security;
    public CloudchannelAccountsCustomersEntitlementsChangeParametersRequest withSecurity(CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity security) {
        this.security = security;
        return this;
    }
}