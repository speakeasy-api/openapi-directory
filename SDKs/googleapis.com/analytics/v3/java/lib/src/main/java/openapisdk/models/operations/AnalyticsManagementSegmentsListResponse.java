package openapisdk.models.operations;



public class AnalyticsManagementSegmentsListResponse {
    public String contentType;
    public AnalyticsManagementSegmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Segments segments;
    public AnalyticsManagementSegmentsListResponse withSegments(openapisdk.models.shared.Segments segments) {
        this.segments = segments;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementSegmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}