package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse {
    public openapisdk.models.shared.ApigatewayPolicy apigatewayPolicy;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse withApigatewayPolicy(openapisdk.models.shared.ApigatewayPolicy apigatewayPolicy) {
        this.apigatewayPolicy = apigatewayPolicy;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}