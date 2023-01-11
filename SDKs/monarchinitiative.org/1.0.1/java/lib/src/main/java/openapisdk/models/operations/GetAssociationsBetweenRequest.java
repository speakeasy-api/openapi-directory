package openapisdk.models.operations;



public class GetAssociationsBetweenRequest {
    public GetAssociationsBetweenPathParams pathParams;
    public GetAssociationsBetweenRequest withPathParams(GetAssociationsBetweenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAssociationsBetweenQueryParams queryParams;
    public GetAssociationsBetweenRequest withQueryParams(GetAssociationsBetweenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}