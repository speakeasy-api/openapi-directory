package openapisdk.models.operations;



public class GamesPlayersGetScopedPlayerIdsResponse {
    public String contentType;
    public GamesPlayersGetScopedPlayerIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScopedPlayerIds scopedPlayerIds;
    public GamesPlayersGetScopedPlayerIdsResponse withScopedPlayerIds(openapisdk.models.shared.ScopedPlayerIds scopedPlayerIds) {
        this.scopedPlayerIds = scopedPlayerIds;
        return this;
    }
    public Long statusCode;
    public GamesPlayersGetScopedPlayerIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}