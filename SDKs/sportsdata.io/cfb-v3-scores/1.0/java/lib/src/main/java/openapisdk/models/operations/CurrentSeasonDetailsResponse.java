package openapisdk.models.operations;



public class CurrentSeasonDetailsResponse {
    public String contentType;
    public CurrentSeasonDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object season;
    public CurrentSeasonDetailsResponse withSeason(Object season) {
        this.season = season;
        return this;
    }
    public Long statusCode;
    public CurrentSeasonDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}