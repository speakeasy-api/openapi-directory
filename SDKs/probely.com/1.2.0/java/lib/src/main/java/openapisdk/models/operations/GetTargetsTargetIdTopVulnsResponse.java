package openapisdk.models.operations;



public class GetTargetsTargetIdTopVulnsResponse {
    public String contentType;
    public GetTargetsTargetIdTopVulnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdTopVulnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdTopVulns200ApplicationJson[] getTargetsTargetIdTopVulns200ApplicationJSONObjects;
    public GetTargetsTargetIdTopVulnsResponse withGetTargetsTargetIdTopVulns200ApplicationJsonObjects(GetTargetsTargetIdTopVulns200ApplicationJson[] getTargetsTargetIdTopVulns200ApplicationJSONObjects) {
        this.getTargetsTargetIdTopVulns200ApplicationJSONObjects = getTargetsTargetIdTopVulns200ApplicationJSONObjects;
        return this;
    }
}