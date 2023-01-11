package openapisdk.models.operations;



public class ListPayeeChangesV4Response {
    public String contentType;
    public ListPayeeChangesV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayeeDeltaResponse2 payeeDeltaResponse2;
    public ListPayeeChangesV4Response withPayeeDeltaResponse2(openapisdk.models.shared.PayeeDeltaResponse2 payeeDeltaResponse2) {
        this.payeeDeltaResponse2 = payeeDeltaResponse2;
        return this;
    }
    public Long statusCode;
    public ListPayeeChangesV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}