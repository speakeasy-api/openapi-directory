package openapisdk.models.operations;



public class GetEventOpRsResponse {
    public String contentType;
    public GetEventOpRsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventOpRs eventOPRs;
    public GetEventOpRsResponse withEventOpRs(openapisdk.models.shared.EventOpRs eventOPRs) {
        this.eventOPRs = eventOPRs;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventOpRsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventOpRsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}