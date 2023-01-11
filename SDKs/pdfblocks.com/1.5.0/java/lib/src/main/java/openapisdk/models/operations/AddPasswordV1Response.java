package openapisdk.models.operations;



public class AddPasswordV1Response {
    public String contentType;
    public AddPasswordV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddPasswordV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] addPasswordV1200ApplicationPdfBinaryString;
    public AddPasswordV1Response withAddPasswordV1200ApplicationPdfBinaryString(byte[] addPasswordV1200ApplicationPdfBinaryString) {
        this.addPasswordV1200ApplicationPdfBinaryString = addPasswordV1200ApplicationPdfBinaryString;
        return this;
    }
    public AddPasswordV14XxApplicationProblemPlusJson addPasswordV14XXApplicationProblemPlusJsonObject;
    public AddPasswordV1Response withAddPasswordV14XxApplicationProblemPlusJsonObject(AddPasswordV14XxApplicationProblemPlusJson addPasswordV14XXApplicationProblemPlusJsonObject) {
        this.addPasswordV14XXApplicationProblemPlusJsonObject = addPasswordV14XXApplicationProblemPlusJsonObject;
        return this;
    }
}