package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesUpdateResponse {
    public String contentType;
    public AnalyticsManagementWebpropertiesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertiesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webproperty webproperty;
    public AnalyticsManagementWebpropertiesUpdateResponse withWebproperty(openapisdk.models.shared.Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}