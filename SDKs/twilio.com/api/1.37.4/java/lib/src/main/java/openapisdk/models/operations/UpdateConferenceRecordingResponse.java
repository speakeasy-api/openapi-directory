package openapisdk.models.operations;



public class UpdateConferenceRecordingResponse {
    public String contentType;
    public UpdateConferenceRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConferenceRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording apiV2010AccountConferenceConferenceRecording;
    public UpdateConferenceRecordingResponse withApiV2010AccountConferenceConferenceRecording(openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording apiV2010AccountConferenceConferenceRecording) {
        this.apiV2010AccountConferenceConferenceRecording = apiV2010AccountConferenceConferenceRecording;
        return this;
    }
}