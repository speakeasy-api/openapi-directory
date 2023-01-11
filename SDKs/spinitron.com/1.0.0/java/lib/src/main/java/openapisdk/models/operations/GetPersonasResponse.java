package openapisdk.models.operations;



public class GetPersonasResponse {
    public byte[] body;
    public GetPersonasResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPersonasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPersonasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPersonas200ApplicationJson getPersonas200ApplicationJSONObject;
    public GetPersonasResponse withGetPersonas200ApplicationJsonObject(GetPersonas200ApplicationJson getPersonas200ApplicationJSONObject) {
        this.getPersonas200ApplicationJSONObject = getPersonas200ApplicationJSONObject;
        return this;
    }
}