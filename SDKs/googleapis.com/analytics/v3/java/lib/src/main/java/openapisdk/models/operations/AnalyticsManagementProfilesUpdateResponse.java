package openapisdk.models.operations;



public class AnalyticsManagementProfilesUpdateResponse {
    public String contentType;
    public AnalyticsManagementProfilesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public AnalyticsManagementProfilesUpdateResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfilesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}