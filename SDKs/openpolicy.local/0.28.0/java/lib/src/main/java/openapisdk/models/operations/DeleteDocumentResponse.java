package openapisdk.models.operations;



public class DeleteDocumentResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public DeleteDocumentResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public DeleteDocumentResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public DeleteDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}