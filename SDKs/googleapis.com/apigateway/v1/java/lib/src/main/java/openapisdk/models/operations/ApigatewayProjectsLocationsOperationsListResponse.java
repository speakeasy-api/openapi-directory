package openapisdk.models.operations;



public class ApigatewayProjectsLocationsOperationsListResponse {
    public openapisdk.models.shared.ApigatewayListOperationsResponse apigatewayListOperationsResponse;
    public ApigatewayProjectsLocationsOperationsListResponse withApigatewayListOperationsResponse(openapisdk.models.shared.ApigatewayListOperationsResponse apigatewayListOperationsResponse) {
        this.apigatewayListOperationsResponse = apigatewayListOperationsResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}