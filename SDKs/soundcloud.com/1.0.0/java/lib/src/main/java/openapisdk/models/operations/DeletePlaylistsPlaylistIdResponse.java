package openapisdk.models.operations;



public class DeletePlaylistsPlaylistIdResponse {
    public String contentType;
    public DeletePlaylistsPlaylistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeletePlaylistsPlaylistIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeletePlaylistsPlaylistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}