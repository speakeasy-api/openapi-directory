package openapisdk.models.operations;



public class AnalyticsManagementProfilesListResponse {
    public String contentType;
    public AnalyticsManagementProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profiles profiles;
    public AnalyticsManagementProfilesListResponse withProfiles(openapisdk.models.shared.Profiles profiles) {
        this.profiles = profiles;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}