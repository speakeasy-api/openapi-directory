package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectsReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportFilter request;
    public GetProjectsReportRequest withRequest(openapisdk.models.shared.ReportFilter request) {
        this.request = request;
        return this;
    }
}