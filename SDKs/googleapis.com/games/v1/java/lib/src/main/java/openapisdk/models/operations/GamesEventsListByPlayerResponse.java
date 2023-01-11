package openapisdk.models.operations;



public class GamesEventsListByPlayerResponse {
    public String contentType;
    public GamesEventsListByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerEventListResponse playerEventListResponse;
    public GamesEventsListByPlayerResponse withPlayerEventListResponse(openapisdk.models.shared.PlayerEventListResponse playerEventListResponse) {
        this.playerEventListResponse = playerEventListResponse;
        return this;
    }
    public Long statusCode;
    public GamesEventsListByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}