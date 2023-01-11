package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportRequest request;
    public ReportsCreateRequest withRequest(openapisdk.models.shared.ReportRequest request) {
        this.request = request;
        return this;
    }
}