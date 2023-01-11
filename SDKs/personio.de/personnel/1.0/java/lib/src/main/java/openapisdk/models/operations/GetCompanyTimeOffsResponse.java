package openapisdk.models.operations;



public class GetCompanyTimeOffsResponse {
    public openapisdk.models.shared.AbsencePeriodsResponse absencePeriodsResponse;
    public GetCompanyTimeOffsResponse withAbsencePeriodsResponse(openapisdk.models.shared.AbsencePeriodsResponse absencePeriodsResponse) {
        this.absencePeriodsResponse = absencePeriodsResponse;
        return this;
    }
    public String contentType;
    public GetCompanyTimeOffsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompanyTimeOffsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}