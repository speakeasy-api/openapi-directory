package openapisdk.models.operations;



public class GetVideoLicenseListResponse {
    public String contentType;
    public GetVideoLicenseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object downloadHistoryDataList;
    public GetVideoLicenseListResponse withDownloadHistoryDataList(Object downloadHistoryDataList) {
        this.downloadHistoryDataList = downloadHistoryDataList;
        return this;
    }
    public Long statusCode;
    public GetVideoLicenseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}