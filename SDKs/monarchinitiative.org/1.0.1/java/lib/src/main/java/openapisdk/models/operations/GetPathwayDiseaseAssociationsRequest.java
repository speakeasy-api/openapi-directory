package openapisdk.models.operations;



public class GetPathwayDiseaseAssociationsRequest {
    public GetPathwayDiseaseAssociationsPathParams pathParams;
    public GetPathwayDiseaseAssociationsRequest withPathParams(GetPathwayDiseaseAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPathwayDiseaseAssociationsQueryParams queryParams;
    public GetPathwayDiseaseAssociationsRequest withQueryParams(GetPathwayDiseaseAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}