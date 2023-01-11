package openapisdk.models.operations;



public class FirebasehostingSitesReleasesCreateResponse {
    public String contentType;
    public FirebasehostingSitesReleasesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public FirebasehostingSitesReleasesCreateResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesReleasesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}