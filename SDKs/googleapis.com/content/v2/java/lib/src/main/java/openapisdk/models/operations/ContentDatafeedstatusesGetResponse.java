package openapisdk.models.operations;



public class ContentDatafeedstatusesGetResponse {
    public String contentType;
    public ContentDatafeedstatusesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedStatus datafeedStatus;
    public ContentDatafeedstatusesGetResponse withDatafeedStatus(openapisdk.models.shared.DatafeedStatus datafeedStatus) {
        this.datafeedStatus = datafeedStatus;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedstatusesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}