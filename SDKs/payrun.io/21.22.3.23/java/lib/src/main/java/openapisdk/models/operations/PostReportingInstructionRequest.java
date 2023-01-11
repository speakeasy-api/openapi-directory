package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportingInstructionRequest {
    public PostReportingInstructionPathParams pathParams;
    public PostReportingInstructionRequest withPathParams(PostReportingInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostReportingInstructionHeaders headers;
    public PostReportingInstructionRequest withHeaders(PostReportingInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportingInstruction request;
    public PostReportingInstructionRequest withRequest(openapisdk.models.shared.ReportingInstruction request) {
        this.request = request;
        return this;
    }
}