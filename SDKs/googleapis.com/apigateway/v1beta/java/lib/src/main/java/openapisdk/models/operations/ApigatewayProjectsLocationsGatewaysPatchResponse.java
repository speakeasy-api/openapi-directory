package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysPatchResponse {
    public openapisdk.models.shared.ApigatewayOperation apigatewayOperation;
    public ApigatewayProjectsLocationsGatewaysPatchResponse withApigatewayOperation(openapisdk.models.shared.ApigatewayOperation apigatewayOperation) {
        this.apigatewayOperation = apigatewayOperation;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}