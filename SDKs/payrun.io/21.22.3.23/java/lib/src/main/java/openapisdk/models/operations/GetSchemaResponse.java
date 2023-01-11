package openapisdk.models.operations;



public class GetSchemaResponse {
    public String contentType;
    public GetSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetSchemaResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getSchema200ApplicationJSONBinaryString;
    public GetSchemaResponse withGetSchema200ApplicationJsonBinaryString(byte[] getSchema200ApplicationJSONBinaryString) {
        this.getSchema200ApplicationJSONBinaryString = getSchema200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}