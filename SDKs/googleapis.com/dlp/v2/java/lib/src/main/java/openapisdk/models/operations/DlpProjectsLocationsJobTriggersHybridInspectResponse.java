package openapisdk.models.operations;



public class DlpProjectsLocationsJobTriggersHybridInspectResponse {
    public String contentType;
    public DlpProjectsLocationsJobTriggersHybridInspectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> googlePrivacyDlpV2HybridInspectResponse;
    public DlpProjectsLocationsJobTriggersHybridInspectResponse withGooglePrivacyDlpV2HybridInspectResponse(java.util.Map<String, Object> googlePrivacyDlpV2HybridInspectResponse) {
        this.googlePrivacyDlpV2HybridInspectResponse = googlePrivacyDlpV2HybridInspectResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsJobTriggersHybridInspectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}