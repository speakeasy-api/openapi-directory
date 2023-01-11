package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisConfigsListResponse {
    public openapisdk.models.shared.ApigatewayListApiConfigsResponse apigatewayListApiConfigsResponse;
    public ApigatewayProjectsLocationsApisConfigsListResponse withApigatewayListApiConfigsResponse(openapisdk.models.shared.ApigatewayListApiConfigsResponse apigatewayListApiConfigsResponse) {
        this.apigatewayListApiConfigsResponse = apigatewayListApiConfigsResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsApisConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsApisConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}