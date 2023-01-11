package openapisdk.models.operations;



public class GetDriversResponse {
    public String contentType;
    public GetDriversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Driver[] drivers;
    public GetDriversResponse withDrivers(openapisdk.models.shared.Driver[] drivers) {
        this.drivers = drivers;
        return this;
    }
    public Long statusCode;
    public GetDriversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}