package openapisdk.models.operations;



public class ExportWirelessJsonResponse {
    public String contentType;
    public ExportWirelessJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportWirelessJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Wireless[] wirelesses;
    public ExportWirelessJsonResponse withWirelesses(openapisdk.models.shared.Wireless[] wirelesses) {
        this.wirelesses = wirelesses;
        return this;
    }
}