package openapisdk.models.operations;



public class GetTargetsAllTopVulnsResponse {
    public String contentType;
    public GetTargetsAllTopVulnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsAllTopVulnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsAllTopVulns200ApplicationJson[] getTargetsAllTopVulns200ApplicationJSONObjects;
    public GetTargetsAllTopVulnsResponse withGetTargetsAllTopVulns200ApplicationJsonObjects(GetTargetsAllTopVulns200ApplicationJson[] getTargetsAllTopVulns200ApplicationJSONObjects) {
        this.getTargetsAllTopVulns200ApplicationJSONObjects = getTargetsAllTopVulns200ApplicationJSONObjects;
        return this;
    }
}