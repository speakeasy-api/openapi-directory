package openapisdk.models.operations;



public class GetPathwayPhenotypeAssociationsRequest {
    public GetPathwayPhenotypeAssociationsPathParams pathParams;
    public GetPathwayPhenotypeAssociationsRequest withPathParams(GetPathwayPhenotypeAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPathwayPhenotypeAssociationsQueryParams queryParams;
    public GetPathwayPhenotypeAssociationsRequest withQueryParams(GetPathwayPhenotypeAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}