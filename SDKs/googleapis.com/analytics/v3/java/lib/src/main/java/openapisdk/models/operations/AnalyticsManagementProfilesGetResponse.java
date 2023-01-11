package openapisdk.models.operations;



public class AnalyticsManagementProfilesGetResponse {
    public String contentType;
    public AnalyticsManagementProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public AnalyticsManagementProfilesGetResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}