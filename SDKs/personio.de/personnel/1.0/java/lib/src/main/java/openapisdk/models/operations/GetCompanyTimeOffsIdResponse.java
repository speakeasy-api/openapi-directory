package openapisdk.models.operations;



public class GetCompanyTimeOffsIdResponse {
    public java.util.Map<String, Object> absencePeriodResponse;
    public GetCompanyTimeOffsIdResponse withAbsencePeriodResponse(java.util.Map<String, Object> absencePeriodResponse) {
        this.absencePeriodResponse = absencePeriodResponse;
        return this;
    }
    public String contentType;
    public GetCompanyTimeOffsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompanyTimeOffsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}