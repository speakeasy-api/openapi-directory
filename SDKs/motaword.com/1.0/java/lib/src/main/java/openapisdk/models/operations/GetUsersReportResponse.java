package openapisdk.models.operations;



public class GetUsersReportResponse {
    public String contentType;
    public GetUsersReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersReportResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsersReport usersReport;
    public GetUsersReportResponse withUsersReport(openapisdk.models.shared.UsersReport usersReport) {
        this.usersReport = usersReport;
        return this;
    }
}