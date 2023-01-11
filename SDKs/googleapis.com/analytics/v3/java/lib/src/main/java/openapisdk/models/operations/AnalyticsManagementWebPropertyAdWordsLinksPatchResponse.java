package openapisdk.models.operations;



public class AnalyticsManagementWebPropertyAdWordsLinksPatchResponse {
    public String contentType;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchResponse withEntityAdWordsLink(openapisdk.models.shared.EntityAdWordsLink entityAdWordsLink) {
        this.entityAdWordsLink = entityAdWordsLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}