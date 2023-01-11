package openapisdk.models.operations;



public class LicenseTrackResponse {
    public String contentType;
    public LicenseTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object licenseAudioResultDataList;
    public LicenseTrackResponse withLicenseAudioResultDataList(Object licenseAudioResultDataList) {
        this.licenseAudioResultDataList = licenseAudioResultDataList;
        return this;
    }
    public Long statusCode;
    public LicenseTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}