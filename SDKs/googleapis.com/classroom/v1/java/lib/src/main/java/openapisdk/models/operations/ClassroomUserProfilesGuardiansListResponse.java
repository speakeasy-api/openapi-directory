package openapisdk.models.operations;



public class ClassroomUserProfilesGuardiansListResponse {
    public String contentType;
    public ClassroomUserProfilesGuardiansListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGuardiansResponse listGuardiansResponse;
    public ClassroomUserProfilesGuardiansListResponse withListGuardiansResponse(openapisdk.models.shared.ListGuardiansResponse listGuardiansResponse) {
        this.listGuardiansResponse = listGuardiansResponse;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGuardiansListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}