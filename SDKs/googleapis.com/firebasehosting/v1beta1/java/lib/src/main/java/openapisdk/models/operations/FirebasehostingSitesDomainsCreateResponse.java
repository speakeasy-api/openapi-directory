package openapisdk.models.operations;



public class FirebasehostingSitesDomainsCreateResponse {
    public String contentType;
    public FirebasehostingSitesDomainsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain domain;
    public FirebasehostingSitesDomainsCreateResponse withDomain(openapisdk.models.shared.Domain domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesDomainsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}