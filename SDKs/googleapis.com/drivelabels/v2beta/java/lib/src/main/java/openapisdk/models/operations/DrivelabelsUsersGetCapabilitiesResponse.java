package openapisdk.models.operations;



public class DrivelabelsUsersGetCapabilitiesResponse {
    public String contentType;
    public DrivelabelsUsersGetCapabilitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAppsDriveLabelsV2betaUserCapabilities googleAppsDriveLabelsV2betaUserCapabilities;
    public DrivelabelsUsersGetCapabilitiesResponse withGoogleAppsDriveLabelsV2betaUserCapabilities(openapisdk.models.shared.GoogleAppsDriveLabelsV2betaUserCapabilities googleAppsDriveLabelsV2betaUserCapabilities) {
        this.googleAppsDriveLabelsV2betaUserCapabilities = googleAppsDriveLabelsV2betaUserCapabilities;
        return this;
    }
    public Long statusCode;
    public DrivelabelsUsersGetCapabilitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}