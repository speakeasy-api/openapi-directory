package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsReportsRunRequest {
    public CloudchannelAccountsReportsRunPathParams pathParams;
    public CloudchannelAccountsReportsRunRequest withPathParams(CloudchannelAccountsReportsRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsReportsRunQueryParams queryParams;
    public CloudchannelAccountsReportsRunRequest withQueryParams(CloudchannelAccountsReportsRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1RunReportJobRequest request;
    public CloudchannelAccountsReportsRunRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1RunReportJobRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsReportsRunSecurity security;
    public CloudchannelAccountsReportsRunRequest withSecurity(CloudchannelAccountsReportsRunSecurity security) {
        this.security = security;
        return this;
    }
}