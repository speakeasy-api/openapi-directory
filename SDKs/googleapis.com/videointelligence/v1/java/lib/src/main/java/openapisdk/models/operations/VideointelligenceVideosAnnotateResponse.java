package openapisdk.models.operations;



public class VideointelligenceVideosAnnotateResponse {
    public String contentType;
    public VideointelligenceVideosAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public VideointelligenceVideosAnnotateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public VideointelligenceVideosAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}