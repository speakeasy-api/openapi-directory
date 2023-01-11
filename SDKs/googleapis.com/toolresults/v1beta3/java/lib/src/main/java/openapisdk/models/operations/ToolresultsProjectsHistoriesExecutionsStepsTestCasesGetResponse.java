package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestCase testCase;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse withTestCase(openapisdk.models.shared.TestCase testCase) {
        this.testCase = testCase;
        return this;
    }
}