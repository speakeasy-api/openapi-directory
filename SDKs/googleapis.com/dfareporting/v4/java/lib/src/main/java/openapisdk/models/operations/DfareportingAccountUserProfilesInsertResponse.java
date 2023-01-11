package openapisdk.models.operations;



public class DfareportingAccountUserProfilesInsertResponse {
    public openapisdk.models.shared.AccountUserProfile accountUserProfile;
    public DfareportingAccountUserProfilesInsertResponse withAccountUserProfile(openapisdk.models.shared.AccountUserProfile accountUserProfile) {
        this.accountUserProfile = accountUserProfile;
        return this;
    }
    public String contentType;
    public DfareportingAccountUserProfilesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountUserProfilesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}