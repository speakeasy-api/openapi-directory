package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisConfigsCreateResponse {
    public openapisdk.models.shared.ApigatewayOperation apigatewayOperation;
    public ApigatewayProjectsLocationsApisConfigsCreateResponse withApigatewayOperation(openapisdk.models.shared.ApigatewayOperation apigatewayOperation) {
        this.apigatewayOperation = apigatewayOperation;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsApisConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsApisConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}