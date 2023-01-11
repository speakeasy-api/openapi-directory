package openapisdk.models.operations;



public class RemoveSignaturesV1Response {
    public String contentType;
    public RemoveSignaturesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveSignaturesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] removeSignaturesV1200ApplicationPdfBinaryString;
    public RemoveSignaturesV1Response withRemoveSignaturesV1200ApplicationPdfBinaryString(byte[] removeSignaturesV1200ApplicationPdfBinaryString) {
        this.removeSignaturesV1200ApplicationPdfBinaryString = removeSignaturesV1200ApplicationPdfBinaryString;
        return this;
    }
    public RemoveSignaturesV14XxApplicationProblemPlusJson removeSignaturesV14XXApplicationProblemPlusJsonObject;
    public RemoveSignaturesV1Response withRemoveSignaturesV14XxApplicationProblemPlusJsonObject(RemoveSignaturesV14XxApplicationProblemPlusJson removeSignaturesV14XXApplicationProblemPlusJsonObject) {
        this.removeSignaturesV14XXApplicationProblemPlusJsonObject = removeSignaturesV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}