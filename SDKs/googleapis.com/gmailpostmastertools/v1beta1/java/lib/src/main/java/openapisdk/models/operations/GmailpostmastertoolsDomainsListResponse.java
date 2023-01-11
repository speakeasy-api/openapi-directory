package openapisdk.models.operations;



public class GmailpostmastertoolsDomainsListResponse {
    public String contentType;
    public GmailpostmastertoolsDomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainsResponse listDomainsResponse;
    public GmailpostmastertoolsDomainsListResponse withListDomainsResponse(openapisdk.models.shared.ListDomainsResponse listDomainsResponse) {
        this.listDomainsResponse = listDomainsResponse;
        return this;
    }
    public Long statusCode;
    public GmailpostmastertoolsDomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}