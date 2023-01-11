package openapisdk.models.operations;



public class ListPayeeChangesV3Response {
    public String contentType;
    public ListPayeeChangesV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayeeDeltaResponse payeeDeltaResponse;
    public ListPayeeChangesV3Response withPayeeDeltaResponse(openapisdk.models.shared.PayeeDeltaResponse payeeDeltaResponse) {
        this.payeeDeltaResponse = payeeDeltaResponse;
        return this;
    }
    public Long statusCode;
    public ListPayeeChangesV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}