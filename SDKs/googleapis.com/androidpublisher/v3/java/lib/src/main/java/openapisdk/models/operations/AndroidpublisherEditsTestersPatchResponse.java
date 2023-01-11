package openapisdk.models.operations;



public class AndroidpublisherEditsTestersPatchResponse {
    public String contentType;
    public AndroidpublisherEditsTestersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsTestersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Testers testers;
    public AndroidpublisherEditsTestersPatchResponse withTesters(openapisdk.models.shared.Testers testers) {
        this.testers = testers;
        return this;
    }
}