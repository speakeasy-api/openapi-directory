package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesFindingsSetStateResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesFindingsSetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Finding finding;
    public SecuritycenterProjectsSourcesFindingsSetStateResponse withFinding(openapisdk.models.shared.Finding finding) {
        this.finding = finding;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesFindingsSetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}