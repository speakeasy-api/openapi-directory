package openapisdk.models.operations;



public class CreateStreamResponse {
    public String contentType;
    public CreateStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallStream apiV2010AccountCallStream;
    public CreateStreamResponse withApiV2010AccountCallStream(openapisdk.models.shared.ApiV2010AccountCallStream apiV2010AccountCallStream) {
        this.apiV2010AccountCallStream = apiV2010AccountCallStream;
        return this;
    }
}