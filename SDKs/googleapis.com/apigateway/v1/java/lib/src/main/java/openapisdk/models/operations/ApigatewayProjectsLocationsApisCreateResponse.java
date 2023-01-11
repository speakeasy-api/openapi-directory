package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisCreateResponse {
    public openapisdk.models.shared.ApigatewayOperation apigatewayOperation;
    public ApigatewayProjectsLocationsApisCreateResponse withApigatewayOperation(openapisdk.models.shared.ApigatewayOperation apigatewayOperation) {
        this.apigatewayOperation = apigatewayOperation;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsApisCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsApisCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}