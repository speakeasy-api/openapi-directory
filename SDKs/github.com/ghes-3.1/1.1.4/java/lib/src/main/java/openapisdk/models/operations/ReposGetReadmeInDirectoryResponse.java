package openapisdk.models.operations;



public class ReposGetReadmeInDirectoryResponse {
    public String contentType;
    public ReposGetReadmeInDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReadmeInDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReadmeInDirectoryResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ContentFile contentFile;
    public ReposGetReadmeInDirectoryResponse withContentFile(openapisdk.models.shared.ContentFile contentFile) {
        this.contentFile = contentFile;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposGetReadmeInDirectoryResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}