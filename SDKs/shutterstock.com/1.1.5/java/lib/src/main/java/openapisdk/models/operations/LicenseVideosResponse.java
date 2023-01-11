package openapisdk.models.operations;



public class LicenseVideosResponse {
    public String contentType;
    public LicenseVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object licenseVideoResultDataList;
    public LicenseVideosResponse withLicenseVideoResultDataList(Object licenseVideoResultDataList) {
        this.licenseVideoResultDataList = licenseVideoResultDataList;
        return this;
    }
    public Long statusCode;
    public LicenseVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}