package openapisdk.models.operations;



public class DcimManufacturersReadResponse {
    public String contentType;
    public DcimManufacturersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Manufacturer manufacturer;
    public DcimManufacturersReadResponse withManufacturer(openapisdk.models.shared.Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    public Long statusCode;
    public DcimManufacturersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}