package openapisdk.models.operations;



public class PlayerGameRedZoneStatsResponse {
    public String contentType;
    public PlayerGameRedZoneStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGameRedZones;
    public PlayerGameRedZoneStatsResponse withPlayerGameRedZones(Object[] playerGameRedZones) {
        this.playerGameRedZones = playerGameRedZones;
        return this;
    }
    public Long statusCode;
    public PlayerGameRedZoneStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}