package openapisdk.models.operations;



public class AndroidpublisherEditsDetailsGetResponse {
    public openapisdk.models.shared.AppDetails appDetails;
    public AndroidpublisherEditsDetailsGetResponse withAppDetails(openapisdk.models.shared.AppDetails appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsDetailsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsDetailsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}