package openapisdk.models.operations;



public class FirebasehostingSitesDomainsGetResponse {
    public String contentType;
    public FirebasehostingSitesDomainsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain domain;
    public FirebasehostingSitesDomainsGetResponse withDomain(openapisdk.models.shared.Domain domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesDomainsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}