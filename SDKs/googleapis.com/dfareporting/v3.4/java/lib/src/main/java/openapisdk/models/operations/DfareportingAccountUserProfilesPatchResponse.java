package openapisdk.models.operations;



public class DfareportingAccountUserProfilesPatchResponse {
    public openapisdk.models.shared.AccountUserProfile accountUserProfile;
    public DfareportingAccountUserProfilesPatchResponse withAccountUserProfile(openapisdk.models.shared.AccountUserProfile accountUserProfile) {
        this.accountUserProfile = accountUserProfile;
        return this;
    }
    public String contentType;
    public DfareportingAccountUserProfilesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountUserProfilesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}