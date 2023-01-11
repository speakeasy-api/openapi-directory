package openapisdk.models.operations;



public class JurisdictionListJurisdictionsGetResponse {
    public String contentType;
    public JurisdictionListJurisdictionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public JurisdictionListJurisdictionsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.JurisdictionList jurisdictionList;
    public JurisdictionListJurisdictionsGetResponse withJurisdictionList(openapisdk.models.shared.JurisdictionList jurisdictionList) {
        this.jurisdictionList = jurisdictionList;
        return this;
    }
    public Long statusCode;
    public JurisdictionListJurisdictionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}