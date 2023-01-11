package openapisdk.models.operations;



public class GetPhenotypePathwayAssociationsRequest {
    public GetPhenotypePathwayAssociationsPathParams pathParams;
    public GetPhenotypePathwayAssociationsRequest withPathParams(GetPhenotypePathwayAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPhenotypePathwayAssociationsQueryParams queryParams;
    public GetPhenotypePathwayAssociationsRequest withQueryParams(GetPhenotypePathwayAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}