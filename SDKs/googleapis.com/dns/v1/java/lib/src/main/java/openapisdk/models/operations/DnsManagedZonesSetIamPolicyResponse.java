package openapisdk.models.operations;



public class DnsManagedZonesSetIamPolicyResponse {
    public String contentType;
    public DnsManagedZonesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public DnsManagedZonesSetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}