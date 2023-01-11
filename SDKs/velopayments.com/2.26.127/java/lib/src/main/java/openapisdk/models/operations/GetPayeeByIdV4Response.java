package openapisdk.models.operations;



public class GetPayeeByIdV4Response {
    public String contentType;
    public GetPayeeByIdV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayeeDetailResponse2 payeeDetailResponse2;
    public GetPayeeByIdV4Response withPayeeDetailResponse2(openapisdk.models.shared.PayeeDetailResponse2 payeeDetailResponse2) {
        this.payeeDetailResponse2 = payeeDetailResponse2;
        return this;
    }
    public Long statusCode;
    public GetPayeeByIdV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}