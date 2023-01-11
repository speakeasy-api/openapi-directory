package openapisdk.models.operations;



public class DeleteServiceTemplateResponse {
    public String contentType;
    public DeleteServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteServiceTemplateResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}