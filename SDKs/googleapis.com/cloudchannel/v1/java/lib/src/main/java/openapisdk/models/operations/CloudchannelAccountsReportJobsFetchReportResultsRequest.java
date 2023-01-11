package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsReportJobsFetchReportResultsRequest {
    public CloudchannelAccountsReportJobsFetchReportResultsPathParams pathParams;
    public CloudchannelAccountsReportJobsFetchReportResultsRequest withPathParams(CloudchannelAccountsReportJobsFetchReportResultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsReportJobsFetchReportResultsQueryParams queryParams;
    public CloudchannelAccountsReportJobsFetchReportResultsRequest withQueryParams(CloudchannelAccountsReportJobsFetchReportResultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudChannelV1FetchReportResultsRequest request;
    public CloudchannelAccountsReportJobsFetchReportResultsRequest withRequest(openapisdk.models.shared.GoogleCloudChannelV1FetchReportResultsRequest request) {
        this.request = request;
        return this;
    }
    public CloudchannelAccountsReportJobsFetchReportResultsSecurity security;
    public CloudchannelAccountsReportJobsFetchReportResultsRequest withSecurity(CloudchannelAccountsReportJobsFetchReportResultsSecurity security) {
        this.security = security;
        return this;
    }
}