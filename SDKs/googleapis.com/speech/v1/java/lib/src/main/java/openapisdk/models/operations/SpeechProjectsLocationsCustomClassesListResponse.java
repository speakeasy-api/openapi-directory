package openapisdk.models.operations;



public class SpeechProjectsLocationsCustomClassesListResponse {
    public String contentType;
    public SpeechProjectsLocationsCustomClassesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomClassesResponse listCustomClassesResponse;
    public SpeechProjectsLocationsCustomClassesListResponse withListCustomClassesResponse(openapisdk.models.shared.ListCustomClassesResponse listCustomClassesResponse) {
        this.listCustomClassesResponse = listCustomClassesResponse;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsCustomClassesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}