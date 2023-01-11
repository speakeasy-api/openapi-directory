package openapisdk.models.operations;



public class MybusinessChainsSearchResponse {
    public String contentType;
    public MybusinessChainsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchChainsResponse searchChainsResponse;
    public MybusinessChainsSearchResponse withSearchChainsResponse(openapisdk.models.shared.SearchChainsResponse searchChainsResponse) {
        this.searchChainsResponse = searchChainsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessChainsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}