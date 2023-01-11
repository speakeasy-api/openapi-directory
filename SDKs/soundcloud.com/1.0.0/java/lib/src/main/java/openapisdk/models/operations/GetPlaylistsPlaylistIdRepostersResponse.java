package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdRepostersResponse {
    public String contentType;
    public GetPlaylistsPlaylistIdRepostersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPlaylistsPlaylistIdRepostersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.MetaUsers metaUsers;
    public GetPlaylistsPlaylistIdRepostersResponse withMetaUsers(openapisdk.models.shared.MetaUsers metaUsers) {
        this.metaUsers = metaUsers;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsPlaylistIdRepostersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}