package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchReportsRequestRequest {
    public DoubleclicksearchReportsRequestQueryParams queryParams;
    public DoubleclicksearchReportsRequestRequest withQueryParams(DoubleclicksearchReportsRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportRequest request;
    public DoubleclicksearchReportsRequestRequest withRequest(openapisdk.models.shared.ReportRequest request) {
        this.request = request;
        return this;
    }
    public DoubleclicksearchReportsRequestSecurity security;
    public DoubleclicksearchReportsRequestRequest withSecurity(DoubleclicksearchReportsRequestSecurity security) {
        this.security = security;
        return this;
    }
}