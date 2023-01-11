package openapisdk.models.operations;



public class DrivePropertiesListResponse {
    public String contentType;
    public DrivePropertiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PropertyList propertyList;
    public DrivePropertiesListResponse withPropertyList(openapisdk.models.shared.PropertyList propertyList) {
        this.propertyList = propertyList;
        return this;
    }
    public Long statusCode;
    public DrivePropertiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}