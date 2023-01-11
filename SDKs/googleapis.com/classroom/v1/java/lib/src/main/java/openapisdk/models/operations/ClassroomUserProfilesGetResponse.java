package openapisdk.models.operations;



public class ClassroomUserProfilesGetResponse {
    public String contentType;
    public ClassroomUserProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClassroomUserProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserProfile userProfile;
    public ClassroomUserProfilesGetResponse withUserProfile(openapisdk.models.shared.UserProfile userProfile) {
        this.userProfile = userProfile;
        return this;
    }
}