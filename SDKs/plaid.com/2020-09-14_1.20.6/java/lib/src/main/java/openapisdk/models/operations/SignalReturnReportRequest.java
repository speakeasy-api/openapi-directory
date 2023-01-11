package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignalReturnReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignalReturnReportRequest request;
    public SignalReturnReportRequest withRequest(openapisdk.models.shared.SignalReturnReportRequest request) {
        this.request = request;
        return this;
    }
}