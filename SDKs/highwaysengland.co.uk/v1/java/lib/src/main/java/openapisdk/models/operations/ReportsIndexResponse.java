package openapisdk.models.operations;



public class ReportsIndexResponse {
    public String contentType;
    public ReportsIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> object;
    public ReportsIndexResponse withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public ReportsIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}