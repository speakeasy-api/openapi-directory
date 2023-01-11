package openapisdk.models.operations;



public class MergeDocumentsV1Response {
    public String contentType;
    public MergeDocumentsV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MergeDocumentsV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] mergeDocumentsV1200ApplicationPdfBinaryString;
    public MergeDocumentsV1Response withMergeDocumentsV1200ApplicationPdfBinaryString(byte[] mergeDocumentsV1200ApplicationPdfBinaryString) {
        this.mergeDocumentsV1200ApplicationPdfBinaryString = mergeDocumentsV1200ApplicationPdfBinaryString;
        return this;
    }
    public MergeDocumentsV14XxApplicationProblemPlusJson mergeDocumentsV14XXApplicationProblemPlusJsonObject;
    public MergeDocumentsV1Response withMergeDocumentsV14XxApplicationProblemPlusJsonObject(MergeDocumentsV14XxApplicationProblemPlusJson mergeDocumentsV14XXApplicationProblemPlusJsonObject) {
        this.mergeDocumentsV14XXApplicationProblemPlusJsonObject = mergeDocumentsV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}