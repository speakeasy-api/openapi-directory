package openapisdk.models.operations;



public class DcimManufacturersPartialUpdateResponse {
    public String contentType;
    public DcimManufacturersPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Manufacturer manufacturer;
    public DcimManufacturersPartialUpdateResponse withManufacturer(openapisdk.models.shared.Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    public Long statusCode;
    public DcimManufacturersPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}