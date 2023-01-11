package openapisdk.models.operations;



public class GetBlobByIdResponse {
    public String contentType;
    public GetBlobByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlobByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getBlobById200ImageWildcardBinaryString;
    public GetBlobByIdResponse withGetBlobById200ImageWildcardBinaryString(byte[] getBlobById200ImageWildcardBinaryString) {
        this.getBlobById200ImageWildcardBinaryString = getBlobById200ImageWildcardBinaryString;
        return this;
    }
}