package openapisdk.models.operations;



public class SignalDecisionReportResponse {
    public String contentType;
    public SignalDecisionReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SignalDecisionReportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SignalDecisionReportResponse signalDecisionReportResponse;
    public SignalDecisionReportResponse withSignalDecisionReportResponse(openapisdk.models.shared.SignalDecisionReportResponse signalDecisionReportResponse) {
        this.signalDecisionReportResponse = signalDecisionReportResponse;
        return this;
    }
    public Long statusCode;
    public SignalDecisionReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}