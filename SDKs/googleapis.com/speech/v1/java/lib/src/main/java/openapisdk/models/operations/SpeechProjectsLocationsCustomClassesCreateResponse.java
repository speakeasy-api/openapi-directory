package openapisdk.models.operations;



public class SpeechProjectsLocationsCustomClassesCreateResponse {
    public String contentType;
    public SpeechProjectsLocationsCustomClassesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomClass customClass;
    public SpeechProjectsLocationsCustomClassesCreateResponse withCustomClass(openapisdk.models.shared.CustomClass customClass) {
        this.customClass = customClass;
        return this;
    }
    public Long statusCode;
    public SpeechProjectsLocationsCustomClassesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}