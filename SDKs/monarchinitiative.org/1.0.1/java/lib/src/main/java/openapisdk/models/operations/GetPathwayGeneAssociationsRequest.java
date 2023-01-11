package openapisdk.models.operations;



public class GetPathwayGeneAssociationsRequest {
    public GetPathwayGeneAssociationsPathParams pathParams;
    public GetPathwayGeneAssociationsRequest withPathParams(GetPathwayGeneAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPathwayGeneAssociationsQueryParams queryParams;
    public GetPathwayGeneAssociationsRequest withQueryParams(GetPathwayGeneAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}