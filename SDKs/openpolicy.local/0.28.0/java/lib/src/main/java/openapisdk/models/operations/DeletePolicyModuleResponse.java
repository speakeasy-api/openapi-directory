package openapisdk.models.operations;



public class DeletePolicyModuleResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public DeletePolicyModuleResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public DeletePolicyModuleResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public DeletePolicyModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletePolicyModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeletePolicyModule200ApplicationJson deletePolicyModule200ApplicationJSONObject;
    public DeletePolicyModuleResponse withDeletePolicyModule200ApplicationJsonObject(DeletePolicyModule200ApplicationJson deletePolicyModule200ApplicationJSONObject) {
        this.deletePolicyModule200ApplicationJSONObject = deletePolicyModule200ApplicationJSONObject;
        return this;
    }
}