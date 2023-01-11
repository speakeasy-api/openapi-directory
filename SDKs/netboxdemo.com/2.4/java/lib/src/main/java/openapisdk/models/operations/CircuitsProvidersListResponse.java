package openapisdk.models.operations;



public class CircuitsProvidersListResponse {
    public String contentType;
    public CircuitsProvidersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CircuitsProvidersList200ApplicationJson circuitsProvidersList200ApplicationJSONObject;
    public CircuitsProvidersListResponse withCircuitsProvidersList200ApplicationJsonObject(CircuitsProvidersList200ApplicationJson circuitsProvidersList200ApplicationJSONObject) {
        this.circuitsProvidersList200ApplicationJSONObject = circuitsProvidersList200ApplicationJSONObject;
        return this;
    }
}