package openapisdk.models.operations;



public class StartDtmfResponse {
    public String contentType;
    public StartDtmfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DtmfResponse dtmfResponse;
    public StartDtmfResponse withDtmfResponse(openapisdk.models.shared.DtmfResponse dtmfResponse) {
        this.dtmfResponse = dtmfResponse;
        return this;
    }
    public Long statusCode;
    public StartDtmfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}