package openapisdk.models.operations;



public class ActivityListStargazersForRepoRequest {
    public ActivityListStargazersForRepoPathParams pathParams;
    public ActivityListStargazersForRepoRequest withPathParams(ActivityListStargazersForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActivityListStargazersForRepoQueryParams queryParams;
    public ActivityListStargazersForRepoRequest withQueryParams(ActivityListStargazersForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}