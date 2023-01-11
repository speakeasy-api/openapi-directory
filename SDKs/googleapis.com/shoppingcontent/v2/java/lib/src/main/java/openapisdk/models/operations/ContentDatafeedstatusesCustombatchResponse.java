package openapisdk.models.operations;



public class ContentDatafeedstatusesCustombatchResponse {
    public String contentType;
    public ContentDatafeedstatusesCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedstatusesCustomBatchResponse datafeedstatusesCustomBatchResponse;
    public ContentDatafeedstatusesCustombatchResponse withDatafeedstatusesCustomBatchResponse(openapisdk.models.shared.DatafeedstatusesCustomBatchResponse datafeedstatusesCustomBatchResponse) {
        this.datafeedstatusesCustomBatchResponse = datafeedstatusesCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedstatusesCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}