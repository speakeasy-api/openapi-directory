package openapisdk.models.operations;



public class GetPhenotypeAnatomyAssociationsResponse {
    public String contentType;
    public GetPhenotypeAnatomyAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NamedObject[] namedObjects;
    public GetPhenotypeAnatomyAssociationsResponse withNamedObjects(openapisdk.models.shared.NamedObject[] namedObjects) {
        this.namedObjects = namedObjects;
        return this;
    }
    public Long statusCode;
    public GetPhenotypeAnatomyAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}