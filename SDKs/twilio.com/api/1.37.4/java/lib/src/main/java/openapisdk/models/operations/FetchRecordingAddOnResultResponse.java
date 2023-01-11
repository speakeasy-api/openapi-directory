package openapisdk.models.operations;



public class FetchRecordingAddOnResultResponse {
    public String contentType;
    public FetchRecordingAddOnResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRecordingAddOnResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult apiV2010AccountRecordingRecordingAddOnResult;
    public FetchRecordingAddOnResultResponse withApiV2010AccountRecordingRecordingAddOnResult(openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult apiV2010AccountRecordingRecordingAddOnResult) {
        this.apiV2010AccountRecordingRecordingAddOnResult = apiV2010AccountRecordingRecordingAddOnResult;
        return this;
    }
}