package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateUser200ApplicationJSONAny;
    public UpdateUserResponse withUpdateUser200ApplicationJsonAny(Object updateUser200ApplicationJSONAny) {
        this.updateUser200ApplicationJSONAny = updateUser200ApplicationJSONAny;
        return this;
    }
}