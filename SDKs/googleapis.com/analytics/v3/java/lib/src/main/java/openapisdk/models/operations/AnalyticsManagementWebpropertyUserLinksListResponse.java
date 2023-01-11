package openapisdk.models.operations;



public class AnalyticsManagementWebpropertyUserLinksListResponse {
    public String contentType;
    public AnalyticsManagementWebpropertyUserLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLinks entityUserLinks;
    public AnalyticsManagementWebpropertyUserLinksListResponse withEntityUserLinks(openapisdk.models.shared.EntityUserLinks entityUserLinks) {
        this.entityUserLinks = entityUserLinks;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertyUserLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}