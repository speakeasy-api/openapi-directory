package openapisdk.models.operations;



public class DrivePropertiesPatchResponse {
    public String contentType;
    public DrivePropertiesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Property property;
    public DrivePropertiesPatchResponse withProperty(openapisdk.models.shared.Property property) {
        this.property = property;
        return this;
    }
    public Long statusCode;
    public DrivePropertiesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}