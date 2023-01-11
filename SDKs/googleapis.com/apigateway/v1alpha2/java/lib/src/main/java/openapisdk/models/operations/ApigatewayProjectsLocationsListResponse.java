package openapisdk.models.operations;



public class ApigatewayProjectsLocationsListResponse {
    public openapisdk.models.shared.ApigatewayListLocationsResponse apigatewayListLocationsResponse;
    public ApigatewayProjectsLocationsListResponse withApigatewayListLocationsResponse(openapisdk.models.shared.ApigatewayListLocationsResponse apigatewayListLocationsResponse) {
        this.apigatewayListLocationsResponse = apigatewayListLocationsResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}