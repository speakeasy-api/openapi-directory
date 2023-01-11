package openapisdk.models.operations;



public class AndroidpublisherEditsInsertResponse {
    public openapisdk.models.shared.AppEdit appEdit;
    public AndroidpublisherEditsInsertResponse withAppEdit(openapisdk.models.shared.AppEdit appEdit) {
        this.appEdit = appEdit;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}