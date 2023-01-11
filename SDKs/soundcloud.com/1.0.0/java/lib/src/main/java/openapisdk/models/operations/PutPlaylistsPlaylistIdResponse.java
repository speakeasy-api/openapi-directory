package openapisdk.models.operations;



public class PutPlaylistsPlaylistIdResponse {
    public String contentType;
    public PutPlaylistsPlaylistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutPlaylistsPlaylistIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutPlaylistsPlaylistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutPlaylistsPlaylistId200ApplicationJson putPlaylistsPlaylistId200ApplicationJSONObject;
    public PutPlaylistsPlaylistIdResponse withPutPlaylistsPlaylistId200ApplicationJsonObject(PutPlaylistsPlaylistId200ApplicationJson putPlaylistsPlaylistId200ApplicationJSONObject) {
        this.putPlaylistsPlaylistId200ApplicationJSONObject = putPlaylistsPlaylistId200ApplicationJSONObject;
        return this;
    }
}