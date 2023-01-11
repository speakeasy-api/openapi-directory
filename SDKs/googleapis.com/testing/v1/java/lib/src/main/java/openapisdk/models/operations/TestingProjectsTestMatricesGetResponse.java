package openapisdk.models.operations;



public class TestingProjectsTestMatricesGetResponse {
    public String contentType;
    public TestingProjectsTestMatricesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestingProjectsTestMatricesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestMatrix testMatrix;
    public TestingProjectsTestMatricesGetResponse withTestMatrix(openapisdk.models.shared.TestMatrix testMatrix) {
        this.testMatrix = testMatrix;
        return this;
    }
}