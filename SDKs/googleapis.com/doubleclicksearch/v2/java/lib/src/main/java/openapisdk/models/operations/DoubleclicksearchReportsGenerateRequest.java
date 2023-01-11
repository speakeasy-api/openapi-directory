package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchReportsGenerateRequest {
    public DoubleclicksearchReportsGenerateQueryParams queryParams;
    public DoubleclicksearchReportsGenerateRequest withQueryParams(DoubleclicksearchReportsGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportRequest request;
    public DoubleclicksearchReportsGenerateRequest withRequest(openapisdk.models.shared.ReportRequest request) {
        this.request = request;
        return this;
    }
    public DoubleclicksearchReportsGenerateSecurity security;
    public DoubleclicksearchReportsGenerateRequest withSecurity(DoubleclicksearchReportsGenerateSecurity security) {
        this.security = security;
        return this;
    }
}