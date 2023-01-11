package openapisdk.models.operations;



public class ClassroomUserProfilesGuardiansGetResponse {
    public String contentType;
    public ClassroomUserProfilesGuardiansGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Guardian guardian;
    public ClassroomUserProfilesGuardiansGetResponse withGuardian(openapisdk.models.shared.Guardian guardian) {
        this.guardian = guardian;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardiansGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}