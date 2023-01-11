package openapisdk.models.operations;



public class GetSubstanceParticipantInAssociationsResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetSubstanceParticipantInAssociationsResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetSubstanceParticipantInAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubstanceParticipantInAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}