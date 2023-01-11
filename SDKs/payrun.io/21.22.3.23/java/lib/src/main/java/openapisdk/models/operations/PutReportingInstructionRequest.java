package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReportingInstructionRequest {
    public PutReportingInstructionPathParams pathParams;
    public PutReportingInstructionRequest withPathParams(PutReportingInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutReportingInstructionHeaders headers;
    public PutReportingInstructionRequest withHeaders(PutReportingInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportingInstruction request;
    public PutReportingInstructionRequest withRequest(openapisdk.models.shared.ReportingInstruction request) {
        this.request = request;
        return this;
    }
}