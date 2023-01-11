package openapisdk.models.operations;



public class ParameterDetailsResponse {
    public String contentType;
    public ParameterDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParameterDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ParameterDetails200ApplicationJson parameterDetails200ApplicationJSONObject;
    public ParameterDetailsResponse withParameterDetails200ApplicationJsonObject(ParameterDetails200ApplicationJson parameterDetails200ApplicationJSONObject) {
        this.parameterDetails200ApplicationJSONObject = parameterDetails200ApplicationJSONObject;
        return this;
    }
}