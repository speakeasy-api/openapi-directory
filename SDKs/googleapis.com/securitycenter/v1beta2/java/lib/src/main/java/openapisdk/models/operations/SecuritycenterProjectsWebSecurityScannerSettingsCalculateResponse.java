package openapisdk.models.operations;



public class SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse {
    public String contentType;
    public SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebSecurityScannerSettings webSecurityScannerSettings;
    public SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse withWebSecurityScannerSettings(openapisdk.models.shared.WebSecurityScannerSettings webSecurityScannerSettings) {
        this.webSecurityScannerSettings = webSecurityScannerSettings;
        return this;
    }
}