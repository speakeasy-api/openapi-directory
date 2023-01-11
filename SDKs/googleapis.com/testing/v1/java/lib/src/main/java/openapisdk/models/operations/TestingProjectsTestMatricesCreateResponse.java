package openapisdk.models.operations;



public class TestingProjectsTestMatricesCreateResponse {
    public String contentType;
    public TestingProjectsTestMatricesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestingProjectsTestMatricesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestMatrix testMatrix;
    public TestingProjectsTestMatricesCreateResponse withTestMatrix(openapisdk.models.shared.TestMatrix testMatrix) {
        this.testMatrix = testMatrix;
        return this;
    }
}