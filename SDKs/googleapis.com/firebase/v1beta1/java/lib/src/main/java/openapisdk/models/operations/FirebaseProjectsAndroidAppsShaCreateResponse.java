package openapisdk.models.operations;



public class FirebaseProjectsAndroidAppsShaCreateResponse {
    public String contentType;
    public FirebaseProjectsAndroidAppsShaCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShaCertificate shaCertificate;
    public FirebaseProjectsAndroidAppsShaCreateResponse withShaCertificate(openapisdk.models.shared.ShaCertificate shaCertificate) {
        this.shaCertificate = shaCertificate;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsAndroidAppsShaCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}