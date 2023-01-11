package openapisdk.models.operations;



public class CreateGroupResponse {
    public String contentType;
    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public CreateGroupResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateGroupResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}