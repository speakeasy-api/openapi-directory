package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ServerlessV1Service serverlessV1Service;
    public FetchServiceResponse withServerlessV1Service(openapisdk.models.shared.ServerlessV1Service serverlessV1Service) {
        this.serverlessV1Service = serverlessV1Service;
        return this;
    }
}