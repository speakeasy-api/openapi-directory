package openapisdk.models.operations;



public class ProdTtSasportalPoliciesGetResponse {
    public String contentType;
    public ProdTtSasportalPoliciesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalPolicy sasPortalPolicy;
    public ProdTtSasportalPoliciesGetResponse withSasPortalPolicy(openapisdk.models.shared.SasPortalPolicy sasPortalPolicy) {
        this.sasPortalPolicy = sasPortalPolicy;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalPoliciesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}