package openapisdk.models.operations;



public class ListSipDomainResponse {
    public String contentType;
    public ListSipDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSipDomainListSipDomainResponse listSipDomainResponse;
    public ListSipDomainResponse withListSipDomainResponse(ListSipDomainListSipDomainResponse listSipDomainResponse) {
        this.listSipDomainResponse = listSipDomainResponse;
        return this;
    }
    public Long statusCode;
    public ListSipDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}