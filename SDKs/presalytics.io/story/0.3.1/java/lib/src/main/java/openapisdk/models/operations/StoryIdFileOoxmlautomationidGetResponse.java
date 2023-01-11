package openapisdk.models.operations;



public class StoryIdFileOoxmlautomationidGetResponse {
    public String contentType;
    public StoryIdFileOoxmlautomationidGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] excelSpreadsheet;
    public StoryIdFileOoxmlautomationidGetResponse withExcelSpreadsheet(byte[] excelSpreadsheet) {
        this.excelSpreadsheet = excelSpreadsheet;
        return this;
    }
    public byte[] powerpointPresentation;
    public StoryIdFileOoxmlautomationidGetResponse withPowerpointPresentation(byte[] powerpointPresentation) {
        this.powerpointPresentation = powerpointPresentation;
        return this;
    }
    public Long statusCode;
    public StoryIdFileOoxmlautomationidGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] wordDocument;
    public StoryIdFileOoxmlautomationidGetResponse withWordDocument(byte[] wordDocument) {
        this.wordDocument = wordDocument;
        return this;
    }
    public Object problemDetail;
    public StoryIdFileOoxmlautomationidGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}