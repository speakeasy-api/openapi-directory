package openapisdk.models.operations;



public class AnalyticsManagementProfileUserLinksInsertResponse {
    public String contentType;
    public AnalyticsManagementProfileUserLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLink entityUserLink;
    public AnalyticsManagementProfileUserLinksInsertResponse withEntityUserLink(openapisdk.models.shared.EntityUserLink entityUserLink) {
        this.entityUserLink = entityUserLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileUserLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}