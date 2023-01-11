package openapisdk.models.operations;



public class JurisdictionDetailJurisdictionsJurisdictionIdGetResponse {
    public String contentType;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.Jurisdiction jurisdiction;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetResponse withJurisdiction(openapisdk.models.shared.Jurisdiction jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    public Long statusCode;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}