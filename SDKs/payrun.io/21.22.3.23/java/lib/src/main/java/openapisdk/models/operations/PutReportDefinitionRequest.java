package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReportDefinitionRequest {
    public PutReportDefinitionPathParams pathParams;
    public PutReportDefinitionRequest withPathParams(PutReportDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutReportDefinitionHeaders headers;
    public PutReportDefinitionRequest withHeaders(PutReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportDefinition request;
    public PutReportDefinitionRequest withRequest(openapisdk.models.shared.ReportDefinition request) {
        this.request = request;
        return this;
    }
}