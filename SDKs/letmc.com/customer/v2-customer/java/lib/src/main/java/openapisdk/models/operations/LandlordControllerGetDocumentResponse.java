package openapisdk.models.operations;



public class LandlordControllerGetDocumentResponse {
    public byte[] body;
    public LandlordControllerGetDocumentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LandlordControllerGetDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> object;
    public LandlordControllerGetDocumentResponse withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}