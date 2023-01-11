package openapisdk.models.operations;



public class RemovePagesV1Response {
    public String contentType;
    public RemovePagesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemovePagesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] removePagesV1200ApplicationPdfBinaryString;
    public RemovePagesV1Response withRemovePagesV1200ApplicationPdfBinaryString(byte[] removePagesV1200ApplicationPdfBinaryString) {
        this.removePagesV1200ApplicationPdfBinaryString = removePagesV1200ApplicationPdfBinaryString;
        return this;
    }
    public RemovePagesV14XxApplicationProblemPlusJson removePagesV14XXApplicationProblemPlusJsonObject;
    public RemovePagesV1Response withRemovePagesV14XxApplicationProblemPlusJsonObject(RemovePagesV14XxApplicationProblemPlusJson removePagesV14XXApplicationProblemPlusJsonObject) {
        this.removePagesV14XXApplicationProblemPlusJsonObject = removePagesV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}