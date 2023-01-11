package openapisdk.models.operations;



public class DrivePropertiesInsertResponse {
    public String contentType;
    public DrivePropertiesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Property property;
    public DrivePropertiesInsertResponse withProperty(openapisdk.models.shared.Property property) {
        this.property = property;
        return this;
    }
    public Long statusCode;
    public DrivePropertiesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}