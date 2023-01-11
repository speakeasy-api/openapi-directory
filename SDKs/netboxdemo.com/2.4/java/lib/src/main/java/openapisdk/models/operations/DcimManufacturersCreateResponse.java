package openapisdk.models.operations;



public class DcimManufacturersCreateResponse {
    public String contentType;
    public DcimManufacturersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Manufacturer manufacturer;
    public DcimManufacturersCreateResponse withManufacturer(openapisdk.models.shared.Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    public Long statusCode;
    public DcimManufacturersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}