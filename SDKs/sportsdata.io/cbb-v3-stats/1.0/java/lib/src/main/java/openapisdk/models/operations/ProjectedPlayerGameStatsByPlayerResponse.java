package openapisdk.models.operations;



public class ProjectedPlayerGameStatsByPlayerResponse {
    public String contentType;
    public ProjectedPlayerGameStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playerGameProjection;
    public ProjectedPlayerGameStatsByPlayerResponse withPlayerGameProjection(Object playerGameProjection) {
        this.playerGameProjection = playerGameProjection;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerGameStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}