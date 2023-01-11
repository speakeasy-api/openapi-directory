package openapisdk.models.operations;



public class PutDocumentResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public PutDocumentResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public PutDocumentResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public PutDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}