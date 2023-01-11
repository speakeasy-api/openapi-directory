package openapisdk.models.operations;



public class AndroidpublisherEditsDetailsUpdateResponse {
    public openapisdk.models.shared.AppDetails appDetails;
    public AndroidpublisherEditsDetailsUpdateResponse withAppDetails(openapisdk.models.shared.AppDetails appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsDetailsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsDetailsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}