package openapisdk.models.operations;



public class CurrentSeasonResponse {
    public String contentType;
    public CurrentSeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object season;
    public CurrentSeasonResponse withSeason(Object season) {
        this.season = season;
        return this;
    }
    public Long statusCode;
    public CurrentSeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}