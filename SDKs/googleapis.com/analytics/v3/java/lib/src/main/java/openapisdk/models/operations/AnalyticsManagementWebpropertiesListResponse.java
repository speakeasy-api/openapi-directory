package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesListResponse {
    public String contentType;
    public AnalyticsManagementWebpropertiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webproperties webproperties;
    public AnalyticsManagementWebpropertiesListResponse withWebproperties(openapisdk.models.shared.Webproperties webproperties) {
        this.webproperties = webproperties;
        return this;
    }
}