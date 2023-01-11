package openapisdk.models.operations;



public class DfareportingUserProfilesGetResponse {
    public String contentType;
    public DfareportingUserProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserProfile userProfile;
    public DfareportingUserProfilesGetResponse withUserProfile(openapisdk.models.shared.UserProfile userProfile) {
        this.userProfile = userProfile;
        return this;
    }
}