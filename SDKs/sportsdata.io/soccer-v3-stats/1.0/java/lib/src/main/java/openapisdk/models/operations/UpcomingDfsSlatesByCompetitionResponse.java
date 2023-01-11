package openapisdk.models.operations;



public class UpcomingDfsSlatesByCompetitionResponse {
    public String contentType;
    public UpcomingDfsSlatesByCompetitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dfsSlates;
    public UpcomingDfsSlatesByCompetitionResponse withDfsSlates(Object[] dfsSlates) {
        this.dfsSlates = dfsSlates;
        return this;
    }
    public Long statusCode;
    public UpcomingDfsSlatesByCompetitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}