package openapisdk.models.operations;



public class GetAnalyticsTokenResponse {
    public openapisdk.models.shared.AnalyticsToken analyticsToken;
    public GetAnalyticsTokenResponse withAnalyticsToken(openapisdk.models.shared.AnalyticsToken analyticsToken) {
        this.analyticsToken = analyticsToken;
        return this;
    }
    public String contentType;
    public GetAnalyticsTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnalyticsTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}