package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysCreateResponse {
    public openapisdk.models.shared.ApigatewayOperation apigatewayOperation;
    public ApigatewayProjectsLocationsGatewaysCreateResponse withApigatewayOperation(openapisdk.models.shared.ApigatewayOperation apigatewayOperation) {
        this.apigatewayOperation = apigatewayOperation;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}