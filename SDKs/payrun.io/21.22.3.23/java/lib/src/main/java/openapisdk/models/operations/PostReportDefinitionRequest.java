package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportDefinitionRequest {
    public PostReportDefinitionHeaders headers;
    public PostReportDefinitionRequest withHeaders(PostReportDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportDefinition request;
    public PostReportDefinitionRequest withRequest(openapisdk.models.shared.ReportDefinition request) {
        this.request = request;
        return this;
    }
}