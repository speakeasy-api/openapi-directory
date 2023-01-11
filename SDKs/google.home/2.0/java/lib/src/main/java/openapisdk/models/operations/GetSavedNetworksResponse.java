package openapisdk.models.operations;



public class GetSavedNetworksResponse {
    public String contentType;
    public GetSavedNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example113[] example113s;
    public GetSavedNetworksResponse withExample113s(openapisdk.models.shared.Example113[] example113s) {
        this.example113s = example113s;
        return this;
    }
    public Long statusCode;
    public GetSavedNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}