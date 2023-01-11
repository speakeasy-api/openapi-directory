package openapisdk.models.operations;



public class LandlordControllerGetSasReportResponse {
    public byte[] body;
    public LandlordControllerGetSasReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LandlordControllerGetSasReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> object;
    public LandlordControllerGetSasReportResponse withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetSasReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}