package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisListResponse {
    public openapisdk.models.shared.ApigatewayListApisResponse apigatewayListApisResponse;
    public ApigatewayProjectsLocationsApisListResponse withApigatewayListApisResponse(openapisdk.models.shared.ApigatewayListApisResponse apigatewayListApisResponse) {
        this.apigatewayListApisResponse = apigatewayListApisResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsApisListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsApisListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}