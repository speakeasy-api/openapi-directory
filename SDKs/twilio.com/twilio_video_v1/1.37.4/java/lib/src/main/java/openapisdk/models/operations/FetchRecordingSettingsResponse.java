package openapisdk.models.operations;



public class FetchRecordingSettingsResponse {
    public String contentType;
    public FetchRecordingSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRecordingSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RecordingSettings videoV1RecordingSettings;
    public FetchRecordingSettingsResponse withVideoV1RecordingSettings(openapisdk.models.shared.VideoV1RecordingSettings videoV1RecordingSettings) {
        this.videoV1RecordingSettings = videoV1RecordingSettings;
        return this;
    }
}