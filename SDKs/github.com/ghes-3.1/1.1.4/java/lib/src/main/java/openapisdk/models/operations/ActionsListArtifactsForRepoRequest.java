package openapisdk.models.operations;



public class ActionsListArtifactsForRepoRequest {
    public ActionsListArtifactsForRepoPathParams pathParams;
    public ActionsListArtifactsForRepoRequest withPathParams(ActionsListArtifactsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActionsListArtifactsForRepoQueryParams queryParams;
    public ActionsListArtifactsForRepoRequest withQueryParams(ActionsListArtifactsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}