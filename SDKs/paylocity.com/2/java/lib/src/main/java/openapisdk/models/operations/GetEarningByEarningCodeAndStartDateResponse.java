package openapisdk.models.operations;



public class GetEarningByEarningCodeAndStartDateResponse {
    public String contentType;
    public GetEarningByEarningCodeAndStartDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEarningByEarningCodeAndStartDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Earning earning;
    public GetEarningByEarningCodeAndStartDateResponse withEarning(openapisdk.models.shared.Earning earning) {
        this.earning = earning;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetEarningByEarningCodeAndStartDateResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}