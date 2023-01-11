package openapisdk.models.operations;



public class AndroidpublisherEditsValidateResponse {
    public openapisdk.models.shared.AppEdit appEdit;
    public AndroidpublisherEditsValidateResponse withAppEdit(openapisdk.models.shared.AppEdit appEdit) {
        this.appEdit = appEdit;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}