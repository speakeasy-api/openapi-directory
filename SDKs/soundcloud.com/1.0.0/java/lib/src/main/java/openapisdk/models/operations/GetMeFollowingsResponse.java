package openapisdk.models.operations;



public class GetMeFollowingsResponse {
    public String contentType;
    public GetMeFollowingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeFollowingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeFollowingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMeFollowings200ApplicationJSONOneOf;
    public GetMeFollowingsResponse withGetMeFollowings200ApplicationJsonOneOf(Object getMeFollowings200ApplicationJSONOneOf) {
        this.getMeFollowings200ApplicationJSONOneOf = getMeFollowings200ApplicationJSONOneOf;
        return this;
    }
}