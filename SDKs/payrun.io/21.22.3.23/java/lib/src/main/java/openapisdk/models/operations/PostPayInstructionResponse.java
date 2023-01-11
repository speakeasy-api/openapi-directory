package openapisdk.models.operations;



public class PostPayInstructionResponse {
    public String contentType;
    public PostPayInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostPayInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostPayInstructionResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostPayInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}