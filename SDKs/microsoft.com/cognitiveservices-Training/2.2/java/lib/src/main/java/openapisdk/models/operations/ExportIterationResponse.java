package openapisdk.models.operations;



public class ExportIterationResponse {
    public byte[] body;
    public ExportIterationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportIterationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Export export;
    public ExportIterationResponse withExport(openapisdk.models.shared.Export export) {
        this.export = export;
        return this;
    }
    public Long statusCode;
    public ExportIterationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}