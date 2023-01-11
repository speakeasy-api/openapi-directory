package openapisdk.models.operations;



public class AnalyticsManagementAccountUserLinksInsertResponse {
    public String contentType;
    public AnalyticsManagementAccountUserLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLink entityUserLink;
    public AnalyticsManagementAccountUserLinksInsertResponse withEntityUserLink(openapisdk.models.shared.EntityUserLink entityUserLink) {
        this.entityUserLink = entityUserLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementAccountUserLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}