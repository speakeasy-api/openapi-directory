package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse {
    public openapisdk.models.shared.ApigatewayPolicy apigatewayPolicy;
    public ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse withApigatewayPolicy(openapisdk.models.shared.ApigatewayPolicy apigatewayPolicy) {
        this.apigatewayPolicy = apigatewayPolicy;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}