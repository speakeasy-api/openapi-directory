package openapisdk.models.operations;



public class AnalyticsManagementProfileFilterLinksUpdateResponse {
    public String contentType;
    public AnalyticsManagementProfileFilterLinksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProfileFilterLink profileFilterLink;
    public AnalyticsManagementProfileFilterLinksUpdateResponse withProfileFilterLink(openapisdk.models.shared.ProfileFilterLink profileFilterLink) {
        this.profileFilterLink = profileFilterLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileFilterLinksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}