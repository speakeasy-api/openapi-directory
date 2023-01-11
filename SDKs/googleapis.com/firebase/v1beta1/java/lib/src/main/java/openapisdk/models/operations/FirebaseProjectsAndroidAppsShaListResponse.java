package openapisdk.models.operations;



public class FirebaseProjectsAndroidAppsShaListResponse {
    public String contentType;
    public FirebaseProjectsAndroidAppsShaListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListShaCertificatesResponse listShaCertificatesResponse;
    public FirebaseProjectsAndroidAppsShaListResponse withListShaCertificatesResponse(openapisdk.models.shared.ListShaCertificatesResponse listShaCertificatesResponse) {
        this.listShaCertificatesResponse = listShaCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsAndroidAppsShaListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}