package openapisdk.models.operations;



public class FetchAppResponse {
    public String contentType;
    public FetchAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MicrovisorV1App microvisorV1App;
    public FetchAppResponse withMicrovisorV1App(openapisdk.models.shared.MicrovisorV1App microvisorV1App) {
        this.microvisorV1App = microvisorV1App;
        return this;
    }
}