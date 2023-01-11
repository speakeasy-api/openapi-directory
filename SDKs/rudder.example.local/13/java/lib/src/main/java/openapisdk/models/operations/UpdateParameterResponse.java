package openapisdk.models.operations;



public class UpdateParameterResponse {
    public String contentType;
    public UpdateParameterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateParameterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateParameter200ApplicationJson updateParameter200ApplicationJSONObject;
    public UpdateParameterResponse withUpdateParameter200ApplicationJsonObject(UpdateParameter200ApplicationJson updateParameter200ApplicationJSONObject) {
        this.updateParameter200ApplicationJSONObject = updateParameter200ApplicationJSONObject;
        return this;
    }
}