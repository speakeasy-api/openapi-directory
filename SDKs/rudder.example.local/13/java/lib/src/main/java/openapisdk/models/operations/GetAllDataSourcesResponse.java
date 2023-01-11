package openapisdk.models.operations;



public class GetAllDataSourcesResponse {
    public String contentType;
    public GetAllDataSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllDataSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllDataSources200ApplicationJson getAllDataSources200ApplicationJSONObject;
    public GetAllDataSourcesResponse withGetAllDataSources200ApplicationJsonObject(GetAllDataSources200ApplicationJson getAllDataSources200ApplicationJSONObject) {
        this.getAllDataSources200ApplicationJSONObject = getAllDataSources200ApplicationJSONObject;
        return this;
    }
}