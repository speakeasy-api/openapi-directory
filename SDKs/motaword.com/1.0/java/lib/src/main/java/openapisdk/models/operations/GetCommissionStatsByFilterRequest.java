package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommissionStatsByFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportFilter request;
    public GetCommissionStatsByFilterRequest withRequest(openapisdk.models.shared.ReportFilter request) {
        this.request = request;
        return this;
    }
}