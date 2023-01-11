package openapisdk.models.operations;



public class GetNodeResourceResponse {
    public openapisdk.models.shared.BioObject[] bioObjects;
    public GetNodeResourceResponse withBioObjects(openapisdk.models.shared.BioObject[] bioObjects) {
        this.bioObjects = bioObjects;
        return this;
    }
    public String contentType;
    public GetNodeResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNodeResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}