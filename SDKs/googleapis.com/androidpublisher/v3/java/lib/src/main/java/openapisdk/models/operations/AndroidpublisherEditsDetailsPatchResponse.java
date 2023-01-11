package openapisdk.models.operations;



public class AndroidpublisherEditsDetailsPatchResponse {
    public openapisdk.models.shared.AppDetails appDetails;
    public AndroidpublisherEditsDetailsPatchResponse withAppDetails(openapisdk.models.shared.AppDetails appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsDetailsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsDetailsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}