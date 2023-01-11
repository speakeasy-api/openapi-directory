package openapisdk.models.operations;



public class CloudchannelAccountsReportsListRequest {
    public CloudchannelAccountsReportsListPathParams pathParams;
    public CloudchannelAccountsReportsListRequest withPathParams(CloudchannelAccountsReportsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelAccountsReportsListQueryParams queryParams;
    public CloudchannelAccountsReportsListRequest withQueryParams(CloudchannelAccountsReportsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelAccountsReportsListSecurity security;
    public CloudchannelAccountsReportsListRequest withSecurity(CloudchannelAccountsReportsListSecurity security) {
        this.security = security;
        return this;
    }
}