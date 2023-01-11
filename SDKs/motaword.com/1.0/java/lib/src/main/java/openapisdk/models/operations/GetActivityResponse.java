package openapisdk.models.operations;



public class GetActivityResponse {
    public openapisdk.models.shared.Activity activity;
    public GetActivityResponse withActivity(openapisdk.models.shared.Activity activity) {
        this.activity = activity;
        return this;
    }
    public String contentType;
    public GetActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetActivityResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}