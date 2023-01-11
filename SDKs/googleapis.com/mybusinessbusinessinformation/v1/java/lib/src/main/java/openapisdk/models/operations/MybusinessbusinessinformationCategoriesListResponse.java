package openapisdk.models.operations;



public class MybusinessbusinessinformationCategoriesListResponse {
    public String contentType;
    public MybusinessbusinessinformationCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCategoriesResponse listCategoriesResponse;
    public MybusinessbusinessinformationCategoriesListResponse withListCategoriesResponse(openapisdk.models.shared.ListCategoriesResponse listCategoriesResponse) {
        this.listCategoriesResponse = listCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessbusinessinformationCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}