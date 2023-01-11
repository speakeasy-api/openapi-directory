package openapisdk.models.operations;



public class ListCustomDescriptorsResponse {
    public String contentType;
    public ListCustomDescriptorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescriptorsListResult descriptorsListResult;
    public ListCustomDescriptorsResponse withDescriptorsListResult(openapisdk.models.shared.DescriptorsListResult descriptorsListResult) {
        this.descriptorsListResult = descriptorsListResult;
        return this;
    }
    public Long statusCode;
    public ListCustomDescriptorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}