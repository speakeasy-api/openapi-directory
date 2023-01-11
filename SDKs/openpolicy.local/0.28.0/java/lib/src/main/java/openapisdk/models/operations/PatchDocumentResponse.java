package openapisdk.models.operations;



public class PatchDocumentResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public PatchDocumentResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public PatchDocumentResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public PatchDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}