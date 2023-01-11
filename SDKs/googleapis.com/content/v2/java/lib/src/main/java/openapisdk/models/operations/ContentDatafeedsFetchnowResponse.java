package openapisdk.models.operations;



public class ContentDatafeedsFetchnowResponse {
    public String contentType;
    public ContentDatafeedsFetchnowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedsFetchNowResponse datafeedsFetchNowResponse;
    public ContentDatafeedsFetchnowResponse withDatafeedsFetchNowResponse(openapisdk.models.shared.DatafeedsFetchNowResponse datafeedsFetchNowResponse) {
        this.datafeedsFetchNowResponse = datafeedsFetchNowResponse;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsFetchnowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}