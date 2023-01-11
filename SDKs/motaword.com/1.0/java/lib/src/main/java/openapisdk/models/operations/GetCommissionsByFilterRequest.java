package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommissionsByFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportFilter request;
    public GetCommissionsByFilterRequest withRequest(openapisdk.models.shared.ReportFilter request) {
        this.request = request;
        return this;
    }
}