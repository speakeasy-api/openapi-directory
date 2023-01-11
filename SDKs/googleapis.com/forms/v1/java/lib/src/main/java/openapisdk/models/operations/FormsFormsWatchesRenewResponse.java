package openapisdk.models.operations;



public class FormsFormsWatchesRenewResponse {
    public String contentType;
    public FormsFormsWatchesRenewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FormsFormsWatchesRenewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Watch watch;
    public FormsFormsWatchesRenewResponse withWatch(openapisdk.models.shared.Watch watch) {
        this.watch = watch;
        return this;
    }
}