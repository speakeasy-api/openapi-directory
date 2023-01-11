package openapisdk.models.operations;



public class AnalyticsManagementWebPropertyAdWordsLinksInsertResponse {
    public String contentType;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertResponse withEntityAdWordsLink(openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink) {
        this.entityAdWordsLink = entityAdWordsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}