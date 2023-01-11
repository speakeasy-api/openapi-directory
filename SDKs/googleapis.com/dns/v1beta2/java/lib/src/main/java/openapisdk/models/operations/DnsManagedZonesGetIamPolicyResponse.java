package openapisdk.models.operations;



public class DnsManagedZonesGetIamPolicyResponse {
    public String contentType;
    public DnsManagedZonesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public DnsManagedZonesGetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}