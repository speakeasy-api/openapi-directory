package openapisdk.models.operations;



public class FantasyDefenseGameStatsResponse {
    public String contentType;
    public FantasyDefenseGameStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] fantasyDefenseGames;
    public FantasyDefenseGameStatsResponse withFantasyDefenseGames(Object[] fantasyDefenseGames) {
        this.fantasyDefenseGames = fantasyDefenseGames;
        return this;
    }
    public Long statusCode;
    public FantasyDefenseGameStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}