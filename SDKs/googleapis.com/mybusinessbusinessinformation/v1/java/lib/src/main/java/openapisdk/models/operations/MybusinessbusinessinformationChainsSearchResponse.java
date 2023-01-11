package openapisdk.models.operations;



public class MybusinessbusinessinformationChainsSearchResponse {
    public String contentType;
    public MybusinessbusinessinformationChainsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchChainsResponse searchChainsResponse;
    public MybusinessbusinessinformationChainsSearchResponse withSearchChainsResponse(openapisdk.models.shared.SearchChainsResponse searchChainsResponse) {
        this.searchChainsResponse = searchChainsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessbusinessinformationChainsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}