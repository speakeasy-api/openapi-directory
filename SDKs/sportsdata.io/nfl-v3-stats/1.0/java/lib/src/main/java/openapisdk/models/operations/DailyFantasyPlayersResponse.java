package openapisdk.models.operations;



public class DailyFantasyPlayersResponse {
    public String contentType;
    public DailyFantasyPlayersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dailyFantasyPlayers;
    public DailyFantasyPlayersResponse withDailyFantasyPlayers(Object[] dailyFantasyPlayers) {
        this.dailyFantasyPlayers = dailyFantasyPlayers;
        return this;
    }
    public Long statusCode;
    public DailyFantasyPlayersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}