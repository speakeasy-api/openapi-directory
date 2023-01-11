package openapisdk.models.operations;



public class DomainsrdapGetEntitiesResponse {
    public String contentType;
    public DomainsrdapGetEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapGetEntitiesResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapGetEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}