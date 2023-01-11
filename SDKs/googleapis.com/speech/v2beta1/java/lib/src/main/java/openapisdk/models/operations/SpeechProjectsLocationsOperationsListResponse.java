package openapisdk.models.operations;



public class SpeechProjectsLocationsOperationsListResponse {
    public String contentType;
    public SpeechProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public SpeechProjectsLocationsOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}