package openapisdk.models.operations;



public class GetAttributesComputedResponse {
    public openapisdk.models.shared.Attribute[] attributes;
    public GetAttributesComputedResponse withAttributes(openapisdk.models.shared.Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    public String contentType;
    public GetAttributesComputedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAttributesComputedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}