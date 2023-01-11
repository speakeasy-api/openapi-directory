package openapisdk.models.operations;



public class GetQueryResponseResponse {
    public String contentType;
    public GetQueryResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetQueryResponseResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getQueryResponse200ApplicationJSONBinaryString;
    public GetQueryResponseResponse withGetQueryResponse200ApplicationJsonBinaryString(byte[] getQueryResponse200ApplicationJSONBinaryString) {
        this.getQueryResponse200ApplicationJSONBinaryString = getQueryResponse200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetQueryResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}