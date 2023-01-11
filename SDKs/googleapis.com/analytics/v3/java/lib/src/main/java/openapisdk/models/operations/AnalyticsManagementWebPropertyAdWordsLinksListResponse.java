package openapisdk.models.operations;



public class AnalyticsManagementWebPropertyAdWordsLinksListResponse {
    public String contentType;
    public AnalyticsManagementWebPropertyAdWordsLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAdWordsLinks entityAdWordsLinks;
    public AnalyticsManagementWebPropertyAdWordsLinksListResponse withEntityAdWordsLinks(openapisdk.models.shared.EntityAdWordsLinks entityAdWordsLinks) {
        this.entityAdWordsLinks = entityAdWordsLinks;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebPropertyAdWordsLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}