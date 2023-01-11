package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsNetworkReportGenerateRequest {
    public AdmobAccountsNetworkReportGeneratePathParams pathParams;
    public AdmobAccountsNetworkReportGenerateRequest withPathParams(AdmobAccountsNetworkReportGeneratePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdmobAccountsNetworkReportGenerateQueryParams queryParams;
    public AdmobAccountsNetworkReportGenerateRequest withQueryParams(AdmobAccountsNetworkReportGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateNetworkReportRequest request;
    public AdmobAccountsNetworkReportGenerateRequest withRequest(openapisdk.models.shared.GenerateNetworkReportRequest request) {
        this.request = request;
        return this;
    }
    public AdmobAccountsNetworkReportGenerateSecurity security;
    public AdmobAccountsNetworkReportGenerateRequest withSecurity(AdmobAccountsNetworkReportGenerateSecurity security) {
        this.security = security;
        return this;
    }
}