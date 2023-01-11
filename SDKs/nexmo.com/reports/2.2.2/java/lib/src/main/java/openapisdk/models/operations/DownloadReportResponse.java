package openapisdk.models.operations;



public class DownloadReportResponse {
    public byte[] body;
    public DownloadReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DownloadReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object downloadReport401ApplicationJSONAny;
    public DownloadReportResponse withDownloadReport401ApplicationJsonAny(Object downloadReport401ApplicationJSONAny) {
        this.downloadReport401ApplicationJSONAny = downloadReport401ApplicationJSONAny;
        return this;
    }
    public Object downloadReport404ApplicationJSONAny;
    public DownloadReportResponse withDownloadReport404ApplicationJsonAny(Object downloadReport404ApplicationJSONAny) {
        this.downloadReport404ApplicationJSONAny = downloadReport404ApplicationJSONAny;
        return this;
    }
}