package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsMediationReportGenerateRequest {
    public AdmobAccountsMediationReportGeneratePathParams pathParams;
    public AdmobAccountsMediationReportGenerateRequest withPathParams(AdmobAccountsMediationReportGeneratePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdmobAccountsMediationReportGenerateQueryParams queryParams;
    public AdmobAccountsMediationReportGenerateRequest withQueryParams(AdmobAccountsMediationReportGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateMediationReportRequest request;
    public AdmobAccountsMediationReportGenerateRequest withRequest(openapisdk.models.shared.GenerateMediationReportRequest request) {
        this.request = request;
        return this;
    }
    public AdmobAccountsMediationReportGenerateSecurity security;
    public AdmobAccountsMediationReportGenerateRequest withSecurity(AdmobAccountsMediationReportGenerateSecurity security) {
        this.security = security;
        return this;
    }
}