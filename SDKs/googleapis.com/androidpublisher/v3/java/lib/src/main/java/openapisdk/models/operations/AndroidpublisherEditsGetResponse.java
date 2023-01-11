package openapisdk.models.operations;



public class AndroidpublisherEditsGetResponse {
    public openapisdk.models.shared.AppEdit appEdit;
    public AndroidpublisherEditsGetResponse withAppEdit(openapisdk.models.shared.AppEdit appEdit) {
        this.appEdit = appEdit;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}