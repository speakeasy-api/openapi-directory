package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesInsertResponse {
    public String contentType;
    public AnalyticsManagementWebpropertiesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertiesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webproperty webproperty;
    public AnalyticsManagementWebpropertiesInsertResponse withWebproperty(openapisdk.models.shared.Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}