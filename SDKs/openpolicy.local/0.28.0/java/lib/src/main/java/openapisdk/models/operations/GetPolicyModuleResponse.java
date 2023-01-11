package openapisdk.models.operations;



public class GetPolicyModuleResponse {
    public openapisdk.models.shared.TwoHundredResult twoHundredResult;
    public GetPolicyModuleResponse withTwoHundredResult(openapisdk.models.shared.TwoHundredResult twoHundredResult) {
        this.twoHundredResult = twoHundredResult;
        return this;
    }
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetPolicyModuleResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public GetPolicyModuleResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public GetPolicyModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPolicyModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}