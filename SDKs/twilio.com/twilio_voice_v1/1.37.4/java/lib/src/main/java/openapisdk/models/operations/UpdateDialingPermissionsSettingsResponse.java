package openapisdk.models.operations;



public class UpdateDialingPermissionsSettingsResponse {
    public String contentType;
    public UpdateDialingPermissionsSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDialingPermissionsSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings voiceV1DialingPermissionsDialingPermissionsSettings;
    public UpdateDialingPermissionsSettingsResponse withVoiceV1DialingPermissionsDialingPermissionsSettings(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings voiceV1DialingPermissionsDialingPermissionsSettings) {
        this.voiceV1DialingPermissionsDialingPermissionsSettings = voiceV1DialingPermissionsDialingPermissionsSettings;
        return this;
    }
}