package openapisdk.models.operations;



public class DriversResponse {
    public String contentType;
    public DriversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] drivers;
    public DriversResponse withDrivers(Object[] drivers) {
        this.drivers = drivers;
        return this;
    }
    public Long statusCode;
    public DriversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}