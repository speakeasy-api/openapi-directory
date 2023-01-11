package openapisdk.models.operations;



public class GamesDevelopmentTeamListResponse {
    public String contentType;
    public GamesDevelopmentTeamListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesDevelopmentTeamListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GamesDevelopmentTeamList200ApplicationJson gamesDevelopmentTeamList200ApplicationJSONObject;
    public GamesDevelopmentTeamListResponse withGamesDevelopmentTeamList200ApplicationJsonObject(GamesDevelopmentTeamList200ApplicationJson gamesDevelopmentTeamList200ApplicationJSONObject) {
        this.gamesDevelopmentTeamList200ApplicationJSONObject = gamesDevelopmentTeamList200ApplicationJSONObject;
        return this;
    }
}