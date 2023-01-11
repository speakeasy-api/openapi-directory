package openapisdk.models.operations;



public class FirebasehostingSitesDomainsListResponse {
    public String contentType;
    public FirebasehostingSitesDomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainsResponse listDomainsResponse;
    public FirebasehostingSitesDomainsListResponse withListDomainsResponse(openapisdk.models.shared.ListDomainsResponse listDomainsResponse) {
        this.listDomainsResponse = listDomainsResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesDomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}