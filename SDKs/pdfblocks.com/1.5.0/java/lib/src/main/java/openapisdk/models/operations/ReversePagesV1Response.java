package openapisdk.models.operations;



public class ReversePagesV1Response {
    public String contentType;
    public ReversePagesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReversePagesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] reversePagesV1200ApplicationPdfBinaryString;
    public ReversePagesV1Response withReversePagesV1200ApplicationPdfBinaryString(byte[] reversePagesV1200ApplicationPdfBinaryString) {
        this.reversePagesV1200ApplicationPdfBinaryString = reversePagesV1200ApplicationPdfBinaryString;
        return this;
    }
    public ReversePagesV14XxApplicationProblemPlusJson reversePagesV14XXApplicationProblemPlusJsonObject;
    public ReversePagesV1Response withReversePagesV14XxApplicationProblemPlusJsonObject(ReversePagesV14XxApplicationProblemPlusJson reversePagesV14XXApplicationProblemPlusJsonObject) {
        this.reversePagesV14XXApplicationProblemPlusJsonObject = reversePagesV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}