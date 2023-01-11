package openapisdk.models.operations;



public class GetDrugByIdRequest {
    public GetDrugByIdPathParams pathParams;
    public GetDrugByIdRequest withPathParams(GetDrugByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDrugByIdQueryParams queryParams;
    public GetDrugByIdRequest withQueryParams(GetDrugByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}