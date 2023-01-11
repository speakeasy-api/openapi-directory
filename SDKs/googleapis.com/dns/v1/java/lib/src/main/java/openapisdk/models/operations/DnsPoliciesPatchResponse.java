package openapisdk.models.operations;



public class DnsPoliciesPatchResponse {
    public String contentType;
    public DnsPoliciesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PoliciesPatchResponse policiesPatchResponse;
    public DnsPoliciesPatchResponse withPoliciesPatchResponse(openapisdk.models.shared.PoliciesPatchResponse policiesPatchResponse) {
        this.policiesPatchResponse = policiesPatchResponse;
        return this;
    }
    public Long statusCode;
    public DnsPoliciesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}