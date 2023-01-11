package openapisdk.models.operations;



public class DcimManufacturersUpdateResponse {
    public String contentType;
    public DcimManufacturersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Manufacturer manufacturer;
    public DcimManufacturersUpdateResponse withManufacturer(openapisdk.models.shared.Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    public Long statusCode;
    public DcimManufacturersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}