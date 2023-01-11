package openapisdk.models.operations;



public class RemovePasswordV1Response {
    public String contentType;
    public RemovePasswordV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemovePasswordV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] removePasswordV1200ApplicationPdfBinaryString;
    public RemovePasswordV1Response withRemovePasswordV1200ApplicationPdfBinaryString(byte[] removePasswordV1200ApplicationPdfBinaryString) {
        this.removePasswordV1200ApplicationPdfBinaryString = removePasswordV1200ApplicationPdfBinaryString;
        return this;
    }
    public RemovePasswordV14XxApplicationProblemPlusJson removePasswordV14XXApplicationProblemPlusJsonObject;
    public RemovePasswordV1Response withRemovePasswordV14XxApplicationProblemPlusJsonObject(RemovePasswordV14XxApplicationProblemPlusJson removePasswordV14XXApplicationProblemPlusJsonObject) {
        this.removePasswordV14XXApplicationProblemPlusJsonObject = removePasswordV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}