package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetExportIamPolicyAnalysisRequest {
    public CloudassetExportIamPolicyAnalysisPathParams pathParams;
    public CloudassetExportIamPolicyAnalysisRequest withPathParams(CloudassetExportIamPolicyAnalysisPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetExportIamPolicyAnalysisQueryParams queryParams;
    public CloudassetExportIamPolicyAnalysisRequest withQueryParams(CloudassetExportIamPolicyAnalysisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportIamPolicyAnalysisRequest request;
    public CloudassetExportIamPolicyAnalysisRequest withRequest(openapisdk.models.shared.ExportIamPolicyAnalysisRequest request) {
        this.request = request;
        return this;
    }
    public CloudassetExportIamPolicyAnalysisSecurity security;
    public CloudassetExportIamPolicyAnalysisRequest withSecurity(CloudassetExportIamPolicyAnalysisSecurity security) {
        this.security = security;
        return this;
    }
}