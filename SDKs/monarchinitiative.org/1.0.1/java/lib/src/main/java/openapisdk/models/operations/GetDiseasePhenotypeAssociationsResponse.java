package openapisdk.models.operations;



public class GetDiseasePhenotypeAssociationsResponse {
    public String contentType;
    public GetDiseasePhenotypeAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.D2PAssociationResults d2PAssociationResults;
    public GetDiseasePhenotypeAssociationsResponse withD2PAssociationResults(openapisdk.models.shared.D2PAssociationResults d2PAssociationResults) {
        this.d2PAssociationResults = d2PAssociationResults;
        return this;
    }
    public Long statusCode;
    public GetDiseasePhenotypeAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}