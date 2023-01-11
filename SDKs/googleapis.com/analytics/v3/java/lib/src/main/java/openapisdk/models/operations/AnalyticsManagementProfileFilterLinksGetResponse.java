package openapisdk.models.operations;



public class AnalyticsManagementProfileFilterLinksGetResponse {
    public String contentType;
    public AnalyticsManagementProfileFilterLinksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProfileFilterLink profileFilterLink;
    public AnalyticsManagementProfileFilterLinksGetResponse withProfileFilterLink(openapisdk.models.shared.ProfileFilterLink profileFilterLink) {
        this.profileFilterLink = profileFilterLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileFilterLinksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}