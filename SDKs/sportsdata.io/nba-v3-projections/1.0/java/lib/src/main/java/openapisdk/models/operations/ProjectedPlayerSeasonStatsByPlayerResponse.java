package openapisdk.models.operations;



public class ProjectedPlayerSeasonStatsByPlayerResponse {
    public String contentType;
    public ProjectedPlayerSeasonStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playerSeasonProjection;
    public ProjectedPlayerSeasonStatsByPlayerResponse withPlayerSeasonProjection(Object playerSeasonProjection) {
        this.playerSeasonProjection = playerSeasonProjection;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerSeasonStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}