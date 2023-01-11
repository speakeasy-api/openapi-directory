package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignalDecisionReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignalDecisionReportRequest request;
    public SignalDecisionReportRequest withRequest(openapisdk.models.shared.SignalDecisionReportRequest request) {
        this.request = request;
        return this;
    }
}