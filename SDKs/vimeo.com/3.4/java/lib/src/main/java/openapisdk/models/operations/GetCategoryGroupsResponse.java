package openapisdk.models.operations;



public class GetCategoryGroupsResponse {
    public String contentType;
    public GetCategoryGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategoryGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public GetCategoryGroupsResponse withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCategoryGroupsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}