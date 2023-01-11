package openapisdk.models.operations;



public class AnalyticsManagementProfilesInsertResponse {
    public String contentType;
    public AnalyticsManagementProfilesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public AnalyticsManagementProfilesInsertResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfilesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}