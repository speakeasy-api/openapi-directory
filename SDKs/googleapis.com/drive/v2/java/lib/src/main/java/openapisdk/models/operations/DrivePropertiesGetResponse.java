package openapisdk.models.operations;



public class DrivePropertiesGetResponse {
    public String contentType;
    public DrivePropertiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Property property;
    public DrivePropertiesGetResponse withProperty(openapisdk.models.shared.Property property) {
        this.property = property;
        return this;
    }
    public Long statusCode;
    public DrivePropertiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}