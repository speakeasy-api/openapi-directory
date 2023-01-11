package openapisdk.models.operations;



public class GetContributorResponse {
    public String contentType;
    public GetContributorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContributorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getContributor200ApplicationJSONObject;
    public GetContributorResponse withGetContributor200ApplicationJsonObject(java.util.Map<String, Object> getContributor200ApplicationJSONObject) {
        this.getContributor200ApplicationJSONObject = getContributor200ApplicationJSONObject;
        return this;
    }
}