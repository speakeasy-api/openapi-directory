package openapisdk.models.operations;



public class ApigatewayProjectsLocationsOperationsGetResponse {
    public openapisdk.models.shared.ApigatewayOperation apigatewayOperation;
    public ApigatewayProjectsLocationsOperationsGetResponse withApigatewayOperation(openapisdk.models.shared.ApigatewayOperation apigatewayOperation) {
        this.apigatewayOperation = apigatewayOperation;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}