package openapisdk.models.operations;



public class FetchDialingPermissionsSettingsResponse {
    public String contentType;
    public FetchDialingPermissionsSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDialingPermissionsSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings voiceV1DialingPermissionsDialingPermissionsSettings;
    public FetchDialingPermissionsSettingsResponse withVoiceV1DialingPermissionsDialingPermissionsSettings(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings voiceV1DialingPermissionsDialingPermissionsSettings) {
        this.voiceV1DialingPermissionsDialingPermissionsSettings = voiceV1DialingPermissionsDialingPermissionsSettings;
        return this;
    }
}