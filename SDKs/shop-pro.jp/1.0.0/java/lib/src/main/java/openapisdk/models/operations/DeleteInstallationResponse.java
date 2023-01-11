package openapisdk.models.operations;



public class DeleteInstallationResponse {
    public String contentType;
    public DeleteInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteInstallation200ApplicationJson deleteInstallation200ApplicationJSONObject;
    public DeleteInstallationResponse withDeleteInstallation200ApplicationJsonObject(DeleteInstallation200ApplicationJson deleteInstallation200ApplicationJSONObject) {
        this.deleteInstallation200ApplicationJSONObject = deleteInstallation200ApplicationJSONObject;
        return this;
    }
}