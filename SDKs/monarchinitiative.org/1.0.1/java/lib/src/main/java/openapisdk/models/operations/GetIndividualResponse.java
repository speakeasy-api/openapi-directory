package openapisdk.models.operations;



public class GetIndividualResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetIndividualResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetIndividualResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIndividualResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}