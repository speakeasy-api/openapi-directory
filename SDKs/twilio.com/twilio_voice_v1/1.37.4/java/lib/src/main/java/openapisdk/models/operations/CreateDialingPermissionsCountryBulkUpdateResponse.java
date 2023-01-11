package openapisdk.models.operations;



public class CreateDialingPermissionsCountryBulkUpdateResponse {
    public String contentType;
    public CreateDialingPermissionsCountryBulkUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDialingPermissionsCountryBulkUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
    public CreateDialingPermissionsCountryBulkUpdateResponse withVoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate) {
        this.voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
        return this;
    }
}