package openapisdk.models.operations;



public class AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse {
    public String contentType;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse withEntityAdWordsLink(openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink) {
        this.entityAdWordsLink = entityAdWordsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}