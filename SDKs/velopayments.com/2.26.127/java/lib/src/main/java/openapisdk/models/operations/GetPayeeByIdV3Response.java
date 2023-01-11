package openapisdk.models.operations;



public class GetPayeeByIdV3Response {
    public String contentType;
    public GetPayeeByIdV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayeeDetailResponse payeeDetailResponse;
    public GetPayeeByIdV3Response withPayeeDetailResponse(openapisdk.models.shared.PayeeDetailResponse payeeDetailResponse) {
        this.payeeDetailResponse = payeeDetailResponse;
        return this;
    }
    public Long statusCode;
    public GetPayeeByIdV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}