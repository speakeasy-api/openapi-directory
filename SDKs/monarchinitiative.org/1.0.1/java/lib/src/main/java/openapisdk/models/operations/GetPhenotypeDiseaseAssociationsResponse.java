package openapisdk.models.operations;



public class GetPhenotypeDiseaseAssociationsResponse {
    public String contentType;
    public GetPhenotypeDiseaseAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.D2PAssociationResults d2PAssociationResults;
    public GetPhenotypeDiseaseAssociationsResponse withD2PAssociationResults(openapisdk.models.shared.D2PAssociationResults d2PAssociationResults) {
        this.d2PAssociationResults = d2PAssociationResults;
        return this;
    }
    public Long statusCode;
    public GetPhenotypeDiseaseAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}