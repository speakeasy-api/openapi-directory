package openapisdk.models.operations;



public class ProjectedPlayerGameStatsByDateResponse {
    public String contentType;
    public ProjectedPlayerGameStatsByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGameProjections;
    public ProjectedPlayerGameStatsByDateResponse withPlayerGameProjections(Object[] playerGameProjections) {
        this.playerGameProjections = playerGameProjections;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerGameStatsByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}