package openapisdk.models.operations;



public class GetGenericObjectResponse {
    public openapisdk.models.shared.BioObject bioObject;
    public GetGenericObjectResponse withBioObject(openapisdk.models.shared.BioObject bioObject) {
        this.bioObject = bioObject;
        return this;
    }
    public String contentType;
    public GetGenericObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenericObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}