package openapisdk.models.operations;



public class GetCompanyAttendancesResponse {
    public openapisdk.models.shared.AttendancePeriodsResponse attendancePeriodsResponse;
    public GetCompanyAttendancesResponse withAttendancePeriodsResponse(openapisdk.models.shared.AttendancePeriodsResponse attendancePeriodsResponse) {
        this.attendancePeriodsResponse = attendancePeriodsResponse;
        return this;
    }
    public String contentType;
    public GetCompanyAttendancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompanyAttendancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}