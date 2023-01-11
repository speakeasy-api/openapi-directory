package openapisdk.models.operations;



public class GetPoliciesResponse {
    public openapisdk.models.shared.TwoHundredResult twoHundredResult;
    public GetPoliciesResponse withTwoHundredResult(openapisdk.models.shared.TwoHundredResult twoHundredResult) {
        this.twoHundredResult = twoHundredResult;
        return this;
    }
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetPoliciesResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public GetPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}