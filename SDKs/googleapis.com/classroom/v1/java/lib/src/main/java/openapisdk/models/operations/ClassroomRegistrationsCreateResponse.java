package openapisdk.models.operations;



public class ClassroomRegistrationsCreateResponse {
    public String contentType;
    public ClassroomRegistrationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Registration registration;
    public ClassroomRegistrationsCreateResponse withRegistration(openapisdk.models.shared.Registration registration) {
        this.registration = registration;
        return this;
    }
    public Long statusCode;
    public ClassroomRegistrationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}