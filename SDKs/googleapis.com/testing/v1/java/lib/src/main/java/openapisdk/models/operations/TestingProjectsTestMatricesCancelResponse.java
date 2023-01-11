package openapisdk.models.operations;



public class TestingProjectsTestMatricesCancelResponse {
    public openapisdk.models.shared.CancelTestMatrixResponse cancelTestMatrixResponse;
    public TestingProjectsTestMatricesCancelResponse withCancelTestMatrixResponse(openapisdk.models.shared.CancelTestMatrixResponse cancelTestMatrixResponse) {
        this.cancelTestMatrixResponse = cancelTestMatrixResponse;
        return this;
    }
    public String contentType;
    public TestingProjectsTestMatricesCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestingProjectsTestMatricesCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}