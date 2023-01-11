package openapisdk.models.operations;



public class SignalReturnReportResponse {
    public String contentType;
    public SignalReturnReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SignalReturnReportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SignalReturnReportResponse signalReturnReportResponse;
    public SignalReturnReportResponse withSignalReturnReportResponse(openapisdk.models.shared.SignalReturnReportResponse signalReturnReportResponse) {
        this.signalReturnReportResponse = signalReturnReportResponse;
        return this;
    }
    public Long statusCode;
    public SignalReturnReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}