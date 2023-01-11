package openapisdk.models.operations;



public class AnalyticsManagementWebpropertiesPatchResponse {
    public String contentType;
    public AnalyticsManagementWebpropertiesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementWebpropertiesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webproperty webproperty;
    public AnalyticsManagementWebpropertiesPatchResponse withWebproperty(openapisdk.models.shared.Webproperty webproperty) {
        this.webproperty = webproperty;
        return this;
    }
}