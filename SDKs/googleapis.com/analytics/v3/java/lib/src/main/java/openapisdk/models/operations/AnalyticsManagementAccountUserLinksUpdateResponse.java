package openapisdk.models.operations;



public class AnalyticsManagementAccountUserLinksUpdateResponse {
    public String contentType;
    public AnalyticsManagementAccountUserLinksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLink entityUserLink;
    public AnalyticsManagementAccountUserLinksUpdateResponse withEntityUserLink(openapisdk.models.shared.EntityUserLink entityUserLink) {
        this.entityUserLink = entityUserLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementAccountUserLinksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}