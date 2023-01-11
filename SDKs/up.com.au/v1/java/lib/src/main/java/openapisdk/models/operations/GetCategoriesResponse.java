package openapisdk.models.operations;



public class GetCategoriesResponse {
    public String contentType;
    public GetCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCategoriesResponse listCategoriesResponse;
    public GetCategoriesResponse withListCategoriesResponse(openapisdk.models.shared.ListCategoriesResponse listCategoriesResponse) {
        this.listCategoriesResponse = listCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public GetCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}