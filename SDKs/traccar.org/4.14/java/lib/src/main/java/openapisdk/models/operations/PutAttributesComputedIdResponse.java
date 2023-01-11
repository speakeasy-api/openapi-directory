package openapisdk.models.operations;



public class PutAttributesComputedIdResponse {
    public openapisdk.models.shared.Attribute attribute;
    public PutAttributesComputedIdResponse withAttribute(openapisdk.models.shared.Attribute attribute) {
        this.attribute = attribute;
        return this;
    }
    public String contentType;
    public PutAttributesComputedIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutAttributesComputedIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}