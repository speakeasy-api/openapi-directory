package openapisdk.models.operations;



public class MybusinessAttributesListResponse {
    public String contentType;
    public MybusinessAttributesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAttributeMetadataResponse listAttributeMetadataResponse;
    public MybusinessAttributesListResponse withListAttributeMetadataResponse(openapisdk.models.shared.ListAttributeMetadataResponse listAttributeMetadataResponse) {
        this.listAttributeMetadataResponse = listAttributeMetadataResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAttributesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}