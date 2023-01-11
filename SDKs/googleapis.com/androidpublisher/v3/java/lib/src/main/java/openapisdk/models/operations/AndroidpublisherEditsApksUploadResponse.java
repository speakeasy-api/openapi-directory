package openapisdk.models.operations;



public class AndroidpublisherEditsApksUploadResponse {
    public openapisdk.models.shared.Apk apk;
    public AndroidpublisherEditsApksUploadResponse withApk(openapisdk.models.shared.Apk apk) {
        this.apk = apk;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsApksUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsApksUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}