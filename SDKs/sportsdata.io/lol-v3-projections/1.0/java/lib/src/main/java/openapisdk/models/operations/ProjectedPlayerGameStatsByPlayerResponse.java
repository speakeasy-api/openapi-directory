package openapisdk.models.operations;



public class ProjectedPlayerGameStatsByPlayerResponse {
    public String contentType;
    public ProjectedPlayerGameStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGameProjections;
    public ProjectedPlayerGameStatsByPlayerResponse withPlayerGameProjections(Object[] playerGameProjections) {
        this.playerGameProjections = playerGameProjections;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerGameStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}