package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1Service serverlessV1Service;
    public CreateServiceResponse withServerlessV1Service(openapisdk.models.shared.ServerlessV1Service serverlessV1Service) {
        this.serverlessV1Service = serverlessV1Service;
        return this;
    }
}