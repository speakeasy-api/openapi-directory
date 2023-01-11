package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Finding finding;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse withFinding(openapisdk.models.shared.Finding finding) {
        this.finding = finding;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}