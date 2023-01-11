package openapisdk.models.shared;



/**
 * DocumentUploadFailure
 * Document upload failed
**/
public class DocumentUploadFailure {
    public String code;
    public DocumentUploadFailure withCode(String code) {
        this.code = code;
        return this;
    }
    public String message;
    public DocumentUploadFailure withMessage(String message) {
        this.message = message;
        return this;
    }
}