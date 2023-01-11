package openapisdk.models.operations;



public class ExportTransactionsCsvv3Response {
    public byte[] body;
    public ExportTransactionsCsvv3Response withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportTransactionsCsvv3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportTransactionsCsvv3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ExportTransactionsCsvv3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ExportTransactionsCsvv3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ExportTransactionsCsvv3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}