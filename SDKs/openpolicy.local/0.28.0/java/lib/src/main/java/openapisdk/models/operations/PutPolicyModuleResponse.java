package openapisdk.models.operations;



public class PutPolicyModuleResponse {
    public openapisdk.models.shared.TwoHundredResult twoHundredResult;
    public PutPolicyModuleResponse withTwoHundredResult(openapisdk.models.shared.TwoHundredResult twoHundredResult) {
        this.twoHundredResult = twoHundredResult;
        return this;
    }
    public openapisdk.models.shared.FourHundred fourHundred;
    public PutPolicyModuleResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public PutPolicyModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutPolicyModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}