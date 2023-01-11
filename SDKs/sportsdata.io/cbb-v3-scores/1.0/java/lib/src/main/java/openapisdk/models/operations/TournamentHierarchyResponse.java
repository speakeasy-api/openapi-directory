package openapisdk.models.operations;



public class TournamentHierarchyResponse {
    public String contentType;
    public TournamentHierarchyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TournamentHierarchyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tournament;
    public TournamentHierarchyResponse withTournament(Object tournament) {
        this.tournament = tournament;
        return this;
    }
}