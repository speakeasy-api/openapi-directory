package openapisdk.models.operations;



public class ServicecontrolServicesCheckResponse {
    public openapisdk.models.shared.CheckResponse checkResponse;
    public ServicecontrolServicesCheckResponse withCheckResponse(openapisdk.models.shared.CheckResponse checkResponse) {
        this.checkResponse = checkResponse;
        return this;
    }
    public String contentType;
    public ServicecontrolServicesCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServicecontrolServicesCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}