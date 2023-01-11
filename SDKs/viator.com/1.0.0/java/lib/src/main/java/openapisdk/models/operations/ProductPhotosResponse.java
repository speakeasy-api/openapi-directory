package openapisdk.models.operations;



public class ProductPhotosResponse {
    public String contentType;
    public ProductPhotosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProductPhotosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ProductPhotos200ApplicationJson productPhotos200ApplicationJSONObject;
    public ProductPhotosResponse withProductPhotos200ApplicationJsonObject(ProductPhotos200ApplicationJson productPhotos200ApplicationJSONObject) {
        this.productPhotos200ApplicationJSONObject = productPhotos200ApplicationJSONObject;
        return this;
    }
}