package openapisdk.models.operations;



public class DescribeServiceResponse {
    public String contentType;
    public DescribeServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceResponse describeServiceResponse;
    public DescribeServiceResponse withDescribeServiceResponse(openapisdk.models.shared.DescribeServiceResponse describeServiceResponse) {
        this.describeServiceResponse = describeServiceResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DescribeServiceResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DescribeServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}