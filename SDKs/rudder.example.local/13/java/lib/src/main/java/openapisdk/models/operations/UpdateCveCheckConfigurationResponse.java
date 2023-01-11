package openapisdk.models.operations;



public class UpdateCveCheckConfigurationResponse {
    public String contentType;
    public UpdateCveCheckConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCveCheckConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateCveCheckConfiguration200ApplicationJson updateCVECheckConfiguration200ApplicationJSONObject;
    public UpdateCveCheckConfigurationResponse withUpdateCveCheckConfiguration200ApplicationJsonObject(UpdateCveCheckConfiguration200ApplicationJson updateCVECheckConfiguration200ApplicationJSONObject) {
        this.updateCVECheckConfiguration200ApplicationJSONObject = updateCVECheckConfiguration200ApplicationJSONObject;
        return this;
    }
}