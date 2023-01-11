package openapisdk.models.operations;



public class ReposGetCommitRequest {
    public ReposGetCommitPathParams pathParams;
    public ReposGetCommitRequest withPathParams(ReposGetCommitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposGetCommitQueryParams queryParams;
    public ReposGetCommitRequest withQueryParams(ReposGetCommitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}