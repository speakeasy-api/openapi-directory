package openapisdk.models.operations;



public class WebriskUrisSearchResponse {
    public String contentType;
    public WebriskUrisSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudWebriskV1SearchUrisResponse googleCloudWebriskV1SearchUrisResponse;
    public WebriskUrisSearchResponse withGoogleCloudWebriskV1SearchUrisResponse(openapisdk.models.shared.GoogleCloudWebriskV1SearchUrisResponse googleCloudWebriskV1SearchUrisResponse) {
        this.googleCloudWebriskV1SearchUrisResponse = googleCloudWebriskV1SearchUrisResponse;
        return this;
    }
    public Long statusCode;
    public WebriskUrisSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}