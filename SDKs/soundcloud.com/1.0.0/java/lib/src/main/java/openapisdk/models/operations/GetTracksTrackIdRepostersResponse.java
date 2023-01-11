package openapisdk.models.operations;



public class GetTracksTrackIdRepostersResponse {
    public String contentType;
    public GetTracksTrackIdRepostersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdRepostersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.MetaUsers metaUsers;
    public GetTracksTrackIdRepostersResponse withMetaUsers(openapisdk.models.shared.MetaUsers metaUsers) {
        this.metaUsers = metaUsers;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdRepostersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}