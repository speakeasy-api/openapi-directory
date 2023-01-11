package openapisdk.models.operations;



public class YoutubeMembershipsLevelsListResponse {
    public String contentType;
    public YoutubeMembershipsLevelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MembershipsLevelListResponse membershipsLevelListResponse;
    public YoutubeMembershipsLevelsListResponse withMembershipsLevelListResponse(openapisdk.models.shared.MembershipsLevelListResponse membershipsLevelListResponse) {
        this.membershipsLevelListResponse = membershipsLevelListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeMembershipsLevelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}