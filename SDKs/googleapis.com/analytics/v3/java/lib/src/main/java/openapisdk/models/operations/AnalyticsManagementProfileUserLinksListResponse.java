package openapisdk.models.operations;



public class AnalyticsManagementProfileUserLinksListResponse {
    public String contentType;
    public AnalyticsManagementProfileUserLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLinks entityUserLinks;
    public AnalyticsManagementProfileUserLinksListResponse withEntityUserLinks(openapisdk.models.shared.EntityUserLinks entityUserLinks) {
        this.entityUserLinks = entityUserLinks;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileUserLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}