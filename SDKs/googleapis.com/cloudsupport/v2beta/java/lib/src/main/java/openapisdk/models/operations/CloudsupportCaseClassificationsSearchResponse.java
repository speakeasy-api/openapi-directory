package openapisdk.models.operations;



public class CloudsupportCaseClassificationsSearchResponse {
    public String contentType;
    public CloudsupportCaseClassificationsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchCaseClassificationsResponse searchCaseClassificationsResponse;
    public CloudsupportCaseClassificationsSearchResponse withSearchCaseClassificationsResponse(openapisdk.models.shared.SearchCaseClassificationsResponse searchCaseClassificationsResponse) {
        this.searchCaseClassificationsResponse = searchCaseClassificationsResponse;
        return this;
    }
    public Long statusCode;
    public CloudsupportCaseClassificationsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}