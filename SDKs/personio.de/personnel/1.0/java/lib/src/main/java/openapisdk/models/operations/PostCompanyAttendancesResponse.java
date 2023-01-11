package openapisdk.models.operations;



public class PostCompanyAttendancesResponse {
    public String contentType;
    public PostCompanyAttendancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetailedErrorResponse detailedErrorResponse;
    public PostCompanyAttendancesResponse withDetailedErrorResponse(openapisdk.models.shared.DetailedErrorResponse detailedErrorResponse) {
        this.detailedErrorResponse = detailedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.NewAttendancePeriodResponse newAttendancePeriodResponse;
    public PostCompanyAttendancesResponse withNewAttendancePeriodResponse(openapisdk.models.shared.NewAttendancePeriodResponse newAttendancePeriodResponse) {
        this.newAttendancePeriodResponse = newAttendancePeriodResponse;
        return this;
    }
    public Long statusCode;
    public PostCompanyAttendancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}