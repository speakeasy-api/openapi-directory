package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse {
    public openapisdk.models.shared.ApigatewayTestIamPermissionsResponse apigatewayTestIamPermissionsResponse;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse withApigatewayTestIamPermissionsResponse(openapisdk.models.shared.ApigatewayTestIamPermissionsResponse apigatewayTestIamPermissionsResponse) {
        this.apigatewayTestIamPermissionsResponse = apigatewayTestIamPermissionsResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}