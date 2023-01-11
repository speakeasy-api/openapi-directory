package openapisdk.models.operations;



public class FormsFormsWatchesCreateResponse {
    public String contentType;
    public FormsFormsWatchesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FormsFormsWatchesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Watch watch;
    public FormsFormsWatchesCreateResponse withWatch(openapisdk.models.shared.Watch watch) {
        this.watch = watch;
        return this;
    }
}