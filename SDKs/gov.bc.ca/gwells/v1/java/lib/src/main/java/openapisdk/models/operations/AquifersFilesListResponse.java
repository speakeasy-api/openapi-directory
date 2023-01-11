package openapisdk.models.operations;



public class AquifersFilesListResponse {
    public String contentType;
    public AquifersFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquifersFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquifersFilesList200ApplicationJson aquifersFilesList200ApplicationJSONObject;
    public AquifersFilesListResponse withAquifersFilesList200ApplicationJsonObject(AquifersFilesList200ApplicationJson aquifersFilesList200ApplicationJSONObject) {
        this.aquifersFilesList200ApplicationJSONObject = aquifersFilesList200ApplicationJSONObject;
        return this;
    }
}