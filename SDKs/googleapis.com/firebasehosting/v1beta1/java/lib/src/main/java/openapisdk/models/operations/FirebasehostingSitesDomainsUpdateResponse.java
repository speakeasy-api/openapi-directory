package openapisdk.models.operations;



public class FirebasehostingSitesDomainsUpdateResponse {
    public String contentType;
    public FirebasehostingSitesDomainsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain domain;
    public FirebasehostingSitesDomainsUpdateResponse withDomain(openapisdk.models.shared.Domain domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesDomainsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}