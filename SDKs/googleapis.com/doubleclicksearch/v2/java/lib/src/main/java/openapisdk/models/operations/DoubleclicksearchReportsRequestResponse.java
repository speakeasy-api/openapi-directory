package openapisdk.models.operations;



public class DoubleclicksearchReportsRequestResponse {
    public String contentType;
    public DoubleclicksearchReportsRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DoubleclicksearchReportsRequestResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchReportsRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}