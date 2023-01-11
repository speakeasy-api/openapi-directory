package openapisdk.models.operations;



public class AnalyticsManagementWebpropertyUserLinksUpdateResponse {
    public String contentType;
    public AnalyticsManagementWebpropertyUserLinksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLink entityUserLink;
    public AnalyticsManagementWebpropertyUserLinksUpdateResponse withEntityUserLink(openapisdk.models.shared.EntityUserLink entityUserLink) {
        this.entityUserLink = entityUserLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertyUserLinksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}