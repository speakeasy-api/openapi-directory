package openapisdk.models.operations;



public class WellsFilesListResponse {
    public String contentType;
    public WellsFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WellsFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WellsFilesList200ApplicationJson wellsFilesList200ApplicationJSONObject;
    public WellsFilesListResponse withWellsFilesList200ApplicationJsonObject(WellsFilesList200ApplicationJson wellsFilesList200ApplicationJSONObject) {
        this.wellsFilesList200ApplicationJSONObject = wellsFilesList200ApplicationJSONObject;
        return this;
    }
}