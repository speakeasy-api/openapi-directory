package openapisdk.models.operations;



public class GroupsmigrationArchiveInsertResponse {
    public String contentType;
    public GroupsmigrationArchiveInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Groups groups;
    public GroupsmigrationArchiveInsertResponse withGroups(openapisdk.models.shared.Groups groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public GroupsmigrationArchiveInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}