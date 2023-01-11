package openapisdk.models.operations;



public class AndroidpublisherEditsCommitResponse {
    public openapisdk.models.shared.AppEdit appEdit;
    public AndroidpublisherEditsCommitResponse withAppEdit(openapisdk.models.shared.AppEdit appEdit) {
        this.appEdit = appEdit;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}