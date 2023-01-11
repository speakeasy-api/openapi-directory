package openapisdk.models.operations;



public class ExtractPagesV1Response {
    public String contentType;
    public ExtractPagesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtractPagesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] extractPagesV1200ApplicationPdfBinaryString;
    public ExtractPagesV1Response withExtractPagesV1200ApplicationPdfBinaryString(byte[] extractPagesV1200ApplicationPdfBinaryString) {
        this.extractPagesV1200ApplicationPdfBinaryString = extractPagesV1200ApplicationPdfBinaryString;
        return this;
    }
    public ExtractPagesV14XxApplicationProblemPlusJson extractPagesV14XXApplicationProblemPlusJsonObject;
    public ExtractPagesV1Response withExtractPagesV14XxApplicationProblemPlusJsonObject(ExtractPagesV14XxApplicationProblemPlusJson extractPagesV14XXApplicationProblemPlusJsonObject) {
        this.extractPagesV14XXApplicationProblemPlusJsonObject = extractPagesV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}