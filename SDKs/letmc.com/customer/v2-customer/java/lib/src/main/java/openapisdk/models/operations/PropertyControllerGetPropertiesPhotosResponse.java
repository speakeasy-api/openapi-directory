package openapisdk.models.operations;



public class PropertyControllerGetPropertiesPhotosResponse {
    public byte[] body;
    public PropertyControllerGetPropertiesPhotosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PropertyControllerGetPropertiesPhotosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordPhotoModelResults landlordPhotoModelResults;
    public PropertyControllerGetPropertiesPhotosResponse withLandlordPhotoModelResults(openapisdk.models.shared.LandlordPhotoModelResults landlordPhotoModelResults) {
        this.landlordPhotoModelResults = landlordPhotoModelResults;
        return this;
    }
    public Long statusCode;
    public PropertyControllerGetPropertiesPhotosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}