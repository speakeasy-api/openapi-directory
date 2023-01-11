package openapisdk.models.operations;



public class DfareportingAccountUserProfilesGetResponse {
    public openapisdk.models.shared.AccountUserProfile accountUserProfile;
    public DfareportingAccountUserProfilesGetResponse withAccountUserProfile(openapisdk.models.shared.AccountUserProfile accountUserProfile) {
        this.accountUserProfile = accountUserProfile;
        return this;
    }
    public String contentType;
    public DfareportingAccountUserProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountUserProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}