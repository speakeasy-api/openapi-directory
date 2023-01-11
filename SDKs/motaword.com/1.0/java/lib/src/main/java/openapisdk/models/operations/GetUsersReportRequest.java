package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportFilter request;
    public GetUsersReportRequest withRequest(openapisdk.models.shared.ReportFilter request) {
        this.request = request;
        return this;
    }
}