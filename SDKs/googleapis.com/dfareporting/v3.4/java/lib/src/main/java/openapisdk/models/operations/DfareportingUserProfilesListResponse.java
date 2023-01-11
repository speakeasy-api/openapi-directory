package openapisdk.models.operations;



public class DfareportingUserProfilesListResponse {
    public String contentType;
    public DfareportingUserProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingUserProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserProfileList userProfileList;
    public DfareportingUserProfilesListResponse withUserProfileList(openapisdk.models.shared.UserProfileList userProfileList) {
        this.userProfileList = userProfileList;
        return this;
    }
}