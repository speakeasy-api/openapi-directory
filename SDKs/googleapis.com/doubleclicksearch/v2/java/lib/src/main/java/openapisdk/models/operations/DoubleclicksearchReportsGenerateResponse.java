package openapisdk.models.operations;



public class DoubleclicksearchReportsGenerateResponse {
    public String contentType;
    public DoubleclicksearchReportsGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DoubleclicksearchReportsGenerateResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchReportsGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}