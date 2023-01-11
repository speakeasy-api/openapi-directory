package openapisdk.models.operations;



public class ApigatewayProjectsLocationsGatewaysListResponse {
    public openapisdk.models.shared.ApigatewayListGatewaysResponse apigatewayListGatewaysResponse;
    public ApigatewayProjectsLocationsGatewaysListResponse withApigatewayListGatewaysResponse(openapisdk.models.shared.ApigatewayListGatewaysResponse apigatewayListGatewaysResponse) {
        this.apigatewayListGatewaysResponse = apigatewayListGatewaysResponse;
        return this;
    }
    public String contentType;
    public ApigatewayProjectsLocationsGatewaysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigatewayProjectsLocationsGatewaysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}