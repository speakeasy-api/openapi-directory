package openapisdk.models.operations;



public class AnalyticsManagementWebPropertyAdWordsLinksGetResponse {
    public String contentType;
    public AnalyticsManagementWebPropertyAdWordsLinksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink;
    public AnalyticsManagementWebPropertyAdWordsLinksGetResponse withEntityAdWordsLink(openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink) {
        this.entityAdWordsLink = entityAdWordsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebPropertyAdWordsLinksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}