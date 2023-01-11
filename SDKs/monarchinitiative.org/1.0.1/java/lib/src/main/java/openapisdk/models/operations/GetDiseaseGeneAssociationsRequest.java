package openapisdk.models.operations;



public class GetDiseaseGeneAssociationsRequest {
    public GetDiseaseGeneAssociationsPathParams pathParams;
    public GetDiseaseGeneAssociationsRequest withPathParams(GetDiseaseGeneAssociationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDiseaseGeneAssociationsQueryParams queryParams;
    public GetDiseaseGeneAssociationsRequest withQueryParams(GetDiseaseGeneAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}