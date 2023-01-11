package openapisdk.models.operations;



public class DfareportingAccountUserProfilesListResponse {
    public openapisdk.models.shared.AccountUserProfilesListResponse accountUserProfilesListResponse;
    public DfareportingAccountUserProfilesListResponse withAccountUserProfilesListResponse(openapisdk.models.shared.AccountUserProfilesListResponse accountUserProfilesListResponse) {
        this.accountUserProfilesListResponse = accountUserProfilesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAccountUserProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountUserProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}