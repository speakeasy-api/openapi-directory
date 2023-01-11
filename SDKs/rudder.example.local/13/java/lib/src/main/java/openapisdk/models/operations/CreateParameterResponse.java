package openapisdk.models.operations;



public class CreateParameterResponse {
    public String contentType;
    public CreateParameterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateParameterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateParameter200ApplicationJson createParameter200ApplicationJSONObject;
    public CreateParameterResponse withCreateParameter200ApplicationJsonObject(CreateParameter200ApplicationJson createParameter200ApplicationJSONObject) {
        this.createParameter200ApplicationJSONObject = createParameter200ApplicationJSONObject;
        return this;
    }
}