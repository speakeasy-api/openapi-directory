package openapisdk.models.operations;



public class StoresReadResponse {
    public String contentType;
    public StoresReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoresReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StoreSingle storeSingle;
    public StoresReadResponse withStoreSingle(openapisdk.models.shared.StoreSingle storeSingle) {
        this.storeSingle = storeSingle;
        return this;
    }
}