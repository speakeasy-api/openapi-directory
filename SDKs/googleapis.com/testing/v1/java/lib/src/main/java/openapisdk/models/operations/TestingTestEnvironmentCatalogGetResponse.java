package openapisdk.models.operations;



public class TestingTestEnvironmentCatalogGetResponse {
    public String contentType;
    public TestingTestEnvironmentCatalogGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestingTestEnvironmentCatalogGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestEnvironmentCatalog testEnvironmentCatalog;
    public TestingTestEnvironmentCatalogGetResponse withTestEnvironmentCatalog(openapisdk.models.shared.TestEnvironmentCatalog testEnvironmentCatalog) {
        this.testEnvironmentCatalog = testEnvironmentCatalog;
        return this;
    }
}