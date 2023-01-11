package openapisdk.models.operations;



public class GetStringsResponse {
    public openapisdk.models.shared.ClientStrings clientStrings;
    public GetStringsResponse withClientStrings(openapisdk.models.shared.ClientStrings clientStrings) {
        this.clientStrings = clientStrings;
        return this;
    }
    public String contentType;
    public GetStringsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStringsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}