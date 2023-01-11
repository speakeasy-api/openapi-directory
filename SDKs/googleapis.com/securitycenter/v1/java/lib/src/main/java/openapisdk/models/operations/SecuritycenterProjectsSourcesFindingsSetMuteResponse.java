package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesFindingsSetMuteResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesFindingsSetMuteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Finding finding;
    public SecuritycenterProjectsSourcesFindingsSetMuteResponse withFinding(openapisdk.models.shared.Finding finding) {
        this.finding = finding;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesFindingsSetMuteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}