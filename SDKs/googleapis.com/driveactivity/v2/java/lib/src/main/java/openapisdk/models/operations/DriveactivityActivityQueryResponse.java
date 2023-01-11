package openapisdk.models.operations;



public class DriveactivityActivityQueryResponse {
    public String contentType;
    public DriveactivityActivityQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryDriveActivityResponse queryDriveActivityResponse;
    public DriveactivityActivityQueryResponse withQueryDriveActivityResponse(openapisdk.models.shared.QueryDriveActivityResponse queryDriveActivityResponse) {
        this.queryDriveActivityResponse = queryDriveActivityResponse;
        return this;
    }
    public Long statusCode;
    public DriveactivityActivityQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}