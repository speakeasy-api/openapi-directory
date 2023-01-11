package openapisdk.models.operations;



public class DoubleclicksearchReportsGetResponse {
    public String contentType;
    public DoubleclicksearchReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DoubleclicksearchReportsGetResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}