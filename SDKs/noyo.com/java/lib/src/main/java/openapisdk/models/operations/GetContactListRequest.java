package openapisdk.models.operations;



public class GetContactListRequest {
    public GetContactListPathParams pathParams;
    public GetContactListRequest withPathParams(GetContactListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContactListQueryParams queryParams;
    public GetContactListRequest withQueryParams(GetContactListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}