package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsListResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse;
    public CloudfunctionsProjectsLocationsFunctionsListResponse withListFunctionsResponse(openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse) {
        this.listFunctionsResponse = listFunctionsResponse;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}