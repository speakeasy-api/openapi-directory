package openapisdk.models.operations;



public class CloudsupportCasesSearchResponse {
    public String contentType;
    public CloudsupportCasesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchCasesResponse searchCasesResponse;
    public CloudsupportCasesSearchResponse withSearchCasesResponse(openapisdk.models.shared.SearchCasesResponse searchCasesResponse) {
        this.searchCasesResponse = searchCasesResponse;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}