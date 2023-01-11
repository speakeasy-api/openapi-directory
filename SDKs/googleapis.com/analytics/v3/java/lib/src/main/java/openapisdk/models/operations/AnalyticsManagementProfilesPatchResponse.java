package openapisdk.models.operations;



public class AnalyticsManagementProfilesPatchResponse {
    public String contentType;
    public AnalyticsManagementProfilesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public AnalyticsManagementProfilesPatchResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfilesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}