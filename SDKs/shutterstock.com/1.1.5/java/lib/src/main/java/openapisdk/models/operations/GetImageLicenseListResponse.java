package openapisdk.models.operations;



public class GetImageLicenseListResponse {
    public String contentType;
    public GetImageLicenseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object downloadHistoryDataList;
    public GetImageLicenseListResponse withDownloadHistoryDataList(Object downloadHistoryDataList) {
        this.downloadHistoryDataList = downloadHistoryDataList;
        return this;
    }
    public Long statusCode;
    public GetImageLicenseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}