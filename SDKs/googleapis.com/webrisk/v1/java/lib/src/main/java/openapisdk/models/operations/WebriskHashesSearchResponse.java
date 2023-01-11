package openapisdk.models.operations;



public class WebriskHashesSearchResponse {
    public String contentType;
    public WebriskHashesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudWebriskV1SearchHashesResponse googleCloudWebriskV1SearchHashesResponse;
    public WebriskHashesSearchResponse withGoogleCloudWebriskV1SearchHashesResponse(openapisdk.models.shared.GoogleCloudWebriskV1SearchHashesResponse googleCloudWebriskV1SearchHashesResponse) {
        this.googleCloudWebriskV1SearchHashesResponse = googleCloudWebriskV1SearchHashesResponse;
        return this;
    }
    public Long statusCode;
    public WebriskHashesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}