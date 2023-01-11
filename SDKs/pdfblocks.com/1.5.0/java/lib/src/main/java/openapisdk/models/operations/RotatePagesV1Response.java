package openapisdk.models.operations;



public class RotatePagesV1Response {
    public String contentType;
    public RotatePagesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RotatePagesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] rotatePagesV1200ApplicationPdfBinaryString;
    public RotatePagesV1Response withRotatePagesV1200ApplicationPdfBinaryString(byte[] rotatePagesV1200ApplicationPdfBinaryString) {
        this.rotatePagesV1200ApplicationPdfBinaryString = rotatePagesV1200ApplicationPdfBinaryString;
        return this;
    }
    public RotatePagesV14XxApplicationProblemPlusJson rotatePagesV14XXApplicationProblemPlusJsonObject;
    public RotatePagesV1Response withRotatePagesV14XxApplicationProblemPlusJsonObject(RotatePagesV14XxApplicationProblemPlusJson rotatePagesV14XXApplicationProblemPlusJsonObject) {
        this.rotatePagesV14XXApplicationProblemPlusJsonObject = rotatePagesV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}