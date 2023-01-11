package openapisdk.models.operations;



public class GetEarningsByEarningCodeResponse {
    public String contentType;
    public GetEarningsByEarningCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEarningsByEarningCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Earning[] earnings;
    public GetEarningsByEarningCodeResponse withEarnings(openapisdk.models.shared.Earning[] earnings) {
        this.earnings = earnings;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetEarningsByEarningCodeResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}