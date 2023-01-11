package openapisdk.models.operations;



public class ListArchivesResponse {
    public String contentType;
    public ListArchivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListArchivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListArchives200ApplicationJson listArchives200ApplicationJSONObject;
    public ListArchivesResponse withListArchives200ApplicationJsonObject(ListArchives200ApplicationJson listArchives200ApplicationJSONObject) {
        this.listArchives200ApplicationJSONObject = listArchives200ApplicationJSONObject;
        return this;
    }
}