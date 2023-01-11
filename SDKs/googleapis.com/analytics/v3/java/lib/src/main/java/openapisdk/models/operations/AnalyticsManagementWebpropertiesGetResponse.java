package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesGetResponse {
    public String contentType;
    public AnalyticsManagementWebpropertiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webproperty webproperty;
    public AnalyticsManagementWebpropertiesGetResponse withWebproperty(openapisdk.models.shared.Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}