package openapisdk.models.operations;



public class DescribeActionResponse {
    public String contentType;
    public DescribeActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeActionResponse describeActionResponse;
    public DescribeActionResponse withDescribeActionResponse(openapisdk.models.shared.DescribeActionResponse describeActionResponse) {
        this.describeActionResponse = describeActionResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DescribeActionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DescribeActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}