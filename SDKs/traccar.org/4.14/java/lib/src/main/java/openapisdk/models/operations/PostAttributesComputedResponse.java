package openapisdk.models.operations;



public class PostAttributesComputedResponse {
    public openapisdk.models.shared.Attribute attribute;
    public PostAttributesComputedResponse withAttribute(openapisdk.models.shared.Attribute attribute) {
        this.attribute = attribute;
        return this;
    }
    public String contentType;
    public PostAttributesComputedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAttributesComputedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}