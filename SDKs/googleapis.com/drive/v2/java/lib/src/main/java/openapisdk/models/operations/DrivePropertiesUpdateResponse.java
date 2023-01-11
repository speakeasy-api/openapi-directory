package openapisdk.models.operations;



public class DrivePropertiesUpdateResponse {
    public String contentType;
    public DrivePropertiesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Property property;
    public DrivePropertiesUpdateResponse withProperty(openapisdk.models.shared.Property property) {
        this.property = property;
        return this;
    }
    public Long statusCode;
    public DrivePropertiesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}