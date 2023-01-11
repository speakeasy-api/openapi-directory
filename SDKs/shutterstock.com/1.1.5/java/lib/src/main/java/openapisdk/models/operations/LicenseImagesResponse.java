package openapisdk.models.operations;



public class LicenseImagesResponse {
    public String contentType;
    public LicenseImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object licenseImageResultDataList;
    public LicenseImagesResponse withLicenseImageResultDataList(Object licenseImageResultDataList) {
        this.licenseImageResultDataList = licenseImageResultDataList;
        return this;
    }
    public Long statusCode;
    public LicenseImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}