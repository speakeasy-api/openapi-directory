package openapisdk.models.operations;



public class DfareportingAccountUserProfilesUpdateResponse {
    public openapisdk.models.shared.AccountUserProfile accountUserProfile;
    public DfareportingAccountUserProfilesUpdateResponse withAccountUserProfile(openapisdk.models.shared.AccountUserProfile accountUserProfile) {
        this.accountUserProfile = accountUserProfile;
        return this;
    }
    public String contentType;
    public DfareportingAccountUserProfilesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountUserProfilesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}