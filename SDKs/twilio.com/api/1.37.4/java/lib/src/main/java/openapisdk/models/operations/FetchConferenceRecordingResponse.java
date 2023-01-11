package openapisdk.models.operations;



public class FetchConferenceRecordingResponse {
    public String contentType;
    public FetchConferenceRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConferenceRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording apiV2010AccountConferenceConferenceRecording;
    public FetchConferenceRecordingResponse withApiV2010AccountConferenceConferenceRecording(openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording apiV2010AccountConferenceConferenceRecording) {
        this.apiV2010AccountConferenceConferenceRecording = apiV2010AccountConferenceConferenceRecording;
        return this;
    }
}