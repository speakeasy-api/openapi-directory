package openapisdk.models.operations;



public class SasportalPoliciesSetResponse {
    public String contentType;
    public SasportalPoliciesSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalPolicy sasPortalPolicy;
    public SasportalPoliciesSetResponse withSasPortalPolicy(openapisdk.models.shared.SasPortalPolicy sasPortalPolicy) {
        this.sasPortalPolicy = sasPortalPolicy;
        return this;
    }
    public Long statusCode;
    public SasportalPoliciesSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}