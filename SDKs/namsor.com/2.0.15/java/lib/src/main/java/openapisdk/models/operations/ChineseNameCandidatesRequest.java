package openapisdk.models.operations;



public class ChineseNameCandidatesRequest {
    public ChineseNameCandidatesPathParams pathParams;
    public ChineseNameCandidatesRequest withPathParams(ChineseNameCandidatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChineseNameCandidatesSecurity security;
    public ChineseNameCandidatesRequest withSecurity(ChineseNameCandidatesSecurity security) {
        this.security = security;
        return this;
    }
}