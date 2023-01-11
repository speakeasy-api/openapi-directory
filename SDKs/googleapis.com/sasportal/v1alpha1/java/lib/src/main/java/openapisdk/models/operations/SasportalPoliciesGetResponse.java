package openapisdk.models.operations;



public class SasportalPoliciesGetResponse {
    public String contentType;
    public SasportalPoliciesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalPolicy sasPortalPolicy;
    public SasportalPoliciesGetResponse withSasPortalPolicy(openapisdk.models.shared.SasPortalPolicy sasPortalPolicy) {
        this.sasPortalPolicy = sasPortalPolicy;
        return this;
    }
    public Long statusCode;
    public SasportalPoliciesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}