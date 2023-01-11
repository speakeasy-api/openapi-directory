package openapisdk.models.operations;



public class RetrievedistributionlinksResponse {
    public String contentType;
    public RetrievedistributionlinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RetrieveDistributionLinksResponse retrieveDistributionLinksResponse;
    public RetrievedistributionlinksResponse withRetrieveDistributionLinksResponse(openapisdk.models.shared.RetrieveDistributionLinksResponse retrieveDistributionLinksResponse) {
        this.retrieveDistributionLinksResponse = retrieveDistributionLinksResponse;
        return this;
    }
    public Long statusCode;
    public RetrievedistributionlinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}