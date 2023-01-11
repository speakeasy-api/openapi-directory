package openapisdk.models.operations;



public class LeagueHierarchyResponse {
    public Object[] conferences;
    public LeagueHierarchyResponse withConferences(Object[] conferences) {
        this.conferences = conferences;
        return this;
    }
    public String contentType;
    public LeagueHierarchyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LeagueHierarchyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}