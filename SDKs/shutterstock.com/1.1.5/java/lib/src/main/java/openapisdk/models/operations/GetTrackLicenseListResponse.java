package openapisdk.models.operations;



public class GetTrackLicenseListResponse {
    public String contentType;
    public GetTrackLicenseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object downloadHistoryDataList;
    public GetTrackLicenseListResponse withDownloadHistoryDataList(Object downloadHistoryDataList) {
        this.downloadHistoryDataList = downloadHistoryDataList;
        return this;
    }
    public Long statusCode;
    public GetTrackLicenseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}