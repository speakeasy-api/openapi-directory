package openapisdk.models.operations;



public class GetDiseasePathwayAssociationsRequest {
    public GetDiseasePathwayAssociationsPathParams pathParams;
    public GetDiseasePathwayAssociationsRequest withPathParams(GetDiseasePathwayAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDiseasePathwayAssociationsQueryParams queryParams;
    public GetDiseasePathwayAssociationsRequest withQueryParams(GetDiseasePathwayAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}