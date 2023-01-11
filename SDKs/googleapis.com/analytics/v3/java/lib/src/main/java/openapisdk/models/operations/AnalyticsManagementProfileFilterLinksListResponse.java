package openapisdk.models.operations;



public class AnalyticsManagementProfileFilterLinksListResponse {
    public String contentType;
    public AnalyticsManagementProfileFilterLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProfileFilterLinks profileFilterLinks;
    public AnalyticsManagementProfileFilterLinksListResponse withProfileFilterLinks(openapisdk.models.shared.ProfileFilterLinks profileFilterLinks) {
        this.profileFilterLinks = profileFilterLinks;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileFilterLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}