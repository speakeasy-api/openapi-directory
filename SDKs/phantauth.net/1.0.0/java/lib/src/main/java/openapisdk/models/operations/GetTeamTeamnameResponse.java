package openapisdk.models.operations;



public class GetTeamTeamnameResponse {
    public String contentType;
    public GetTeamTeamnameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamTeamnameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamTeamname200ApplicationJson getTeamTeamname200ApplicationJSONObject;
    public GetTeamTeamnameResponse withGetTeamTeamname200ApplicationJsonObject(GetTeamTeamname200ApplicationJson getTeamTeamname200ApplicationJSONObject) {
        this.getTeamTeamname200ApplicationJSONObject = getTeamTeamname200ApplicationJSONObject;
        return this;
    }
}