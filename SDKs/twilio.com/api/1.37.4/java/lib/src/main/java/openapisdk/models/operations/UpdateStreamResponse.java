package openapisdk.models.operations;



public class UpdateStreamResponse {
    public String contentType;
    public UpdateStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallStream apiV2010AccountCallStream;
    public UpdateStreamResponse withApiV2010AccountCallStream(openapisdk.models.shared.ApiV2010AccountCallStream apiV2010AccountCallStream) {
        this.apiV2010AccountCallStream = apiV2010AccountCallStream;
        return this;
    }
}