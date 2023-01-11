package openapisdk.models.operations;



public class GetQuestionsRequest {
    public GetQuestionsQueryParams queryParams;
    public GetQuestionsRequest withQueryParams(GetQuestionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuestionsHeaders headers;
    public GetQuestionsRequest withHeaders(GetQuestionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}