package openapisdk.models.operations;



public class DriveAboutGetResponse {
    public openapisdk.models.shared.About about;
    public DriveAboutGetResponse withAbout(openapisdk.models.shared.About about) {
        this.about = about;
        return this;
    }
    public String contentType;
    public DriveAboutGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveAboutGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}