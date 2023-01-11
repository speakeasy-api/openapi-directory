package openapisdk.models.operations;



public class AnalyticsManagementAccountUserLinksListResponse {
    public String contentType;
    public AnalyticsManagementAccountUserLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLinks entityUserLinks;
    public AnalyticsManagementAccountUserLinksListResponse withEntityUserLinks(openapisdk.models.shared.EntityUserLinks entityUserLinks) {
        this.entityUserLinks = entityUserLinks;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementAccountUserLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}