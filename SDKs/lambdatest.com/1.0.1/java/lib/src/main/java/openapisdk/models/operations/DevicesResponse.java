package openapisdk.models.operations;



public class DevicesResponse {
    public Object accessDenied;
    public DevicesResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public DevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object osDevices;
    public DevicesResponse withOsDevices(Object osDevices) {
        this.osDevices = osDevices;
        return this;
    }
}