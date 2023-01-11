package openapisdk.models.operations;



public class FetchDialingPermissionsCountryResponse {
    public String contentType;
    public FetchDialingPermissionsCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDialingPermissionsCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance voiceV1DialingPermissionsDialingPermissionsCountryInstance;
    public FetchDialingPermissionsCountryResponse withVoiceV1DialingPermissionsDialingPermissionsCountryInstance(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance voiceV1DialingPermissionsDialingPermissionsCountryInstance) {
        this.voiceV1DialingPermissionsDialingPermissionsCountryInstance = voiceV1DialingPermissionsDialingPermissionsCountryInstance;
        return this;
    }
}