package openapisdk.models.operations;



public class GetBlobMetadataByIdResponse {
    public openapisdk.models.shared.Blob blob;
    public GetBlobMetadataByIdResponse withBlob(openapisdk.models.shared.Blob blob) {
        this.blob = blob;
        return this;
    }
    public String contentType;
    public GetBlobMetadataByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlobMetadataByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}