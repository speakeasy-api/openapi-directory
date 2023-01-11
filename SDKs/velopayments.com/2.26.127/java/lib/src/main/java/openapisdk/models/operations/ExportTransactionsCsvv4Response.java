package openapisdk.models.operations;



public class ExportTransactionsCsvv4Response {
    public byte[] body;
    public ExportTransactionsCsvv4Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportTransactionsCsvv4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportTransactionsCsvv4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}