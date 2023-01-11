package openapisdk.models.operations;



public class UpdateABlockResponse {
    public String contentType;
    public UpdateABlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateABlockResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateABlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateABlock200ApplicationJson updateABlock200ApplicationJSONObject;
    public UpdateABlockResponse withUpdateABlock200ApplicationJsonObject(UpdateABlock200ApplicationJson updateABlock200ApplicationJSONObject) {
        this.updateABlock200ApplicationJSONObject = updateABlock200ApplicationJSONObject;
        return this;
    }
}