package openapisdk.models.operations;



public class GetMeFollowersResponse {
    public String contentType;
    public GetMeFollowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeFollowersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeFollowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMeFollowers200ApplicationJSONOneOf;
    public GetMeFollowersResponse withGetMeFollowers200ApplicationJsonOneOf(Object getMeFollowers200ApplicationJSONOneOf) {
        this.getMeFollowers200ApplicationJSONOneOf = getMeFollowers200ApplicationJSONOneOf;
        return this;
    }
}