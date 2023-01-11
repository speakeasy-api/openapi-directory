package openapisdk.models.operations;



public class FetchRecordingAddOnResultPayloadResponse {
    public String contentType;
    public FetchRecordingAddOnResultPayloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRecordingAddOnResultPayloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
    public FetchRecordingAddOnResultPayloadResponse withApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload(openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload) {
        this.apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
        return this;
    }
}