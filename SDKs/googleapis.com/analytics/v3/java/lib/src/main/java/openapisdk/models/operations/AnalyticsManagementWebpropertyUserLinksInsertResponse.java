package openapisdk.models.operations;



public class AnalyticsManagementWebpropertyUserLinksInsertResponse {
    public String contentType;
    public AnalyticsManagementWebpropertyUserLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityUserLink entityUserLink;
    public AnalyticsManagementWebpropertyUserLinksInsertResponse withEntityUserLink(openapisdk.models.shared.EntityUserLink entityUserLink) {
        this.entityUserLink = entityUserLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertyUserLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}