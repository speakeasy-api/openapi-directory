package openapisdk.models.operations;



public class SpeechProjectsLocationsOperationsGetResponse {
    public String contentType;
    public SpeechProjectsLocationsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public SpeechProjectsLocationsOperationsGetResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}