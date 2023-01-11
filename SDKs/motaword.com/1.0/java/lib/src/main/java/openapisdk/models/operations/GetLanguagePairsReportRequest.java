package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLanguagePairsReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportFilter request;
    public GetLanguagePairsReportRequest withRequest(openapisdk.models.shared.ReportFilter request) {
        this.request = request;
        return this;
    }
}