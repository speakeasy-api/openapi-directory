package openapisdk.models.operations;



public class CreateRecordingSettingsResponse {
    public String contentType;
    public CreateRecordingSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRecordingSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RecordingSettings videoV1RecordingSettings;
    public CreateRecordingSettingsResponse withVideoV1RecordingSettings(openapisdk.models.shared.VideoV1RecordingSettings videoV1RecordingSettings) {
        this.videoV1RecordingSettings = videoV1RecordingSettings;
        return this;
    }
}