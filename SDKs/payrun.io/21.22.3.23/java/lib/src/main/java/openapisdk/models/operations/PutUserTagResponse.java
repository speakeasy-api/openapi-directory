package openapisdk.models.operations;



public class PutUserTagResponse {
    public String contentType;
    public PutUserTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutUserTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutUserTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public PutUserTagResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}