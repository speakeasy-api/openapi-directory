package openapisdk.models.operations;



public class ReposDeleteResponse {
    public String contentType;
    public ReposDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeleteResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ReposDelete403ApplicationJson reposDelete403ApplicationJSONObject;
    public ReposDeleteResponse withReposDelete403ApplicationJsonObject(ReposDelete403ApplicationJson reposDelete403ApplicationJSONObject) {
        this.reposDelete403ApplicationJSONObject = reposDelete403ApplicationJSONObject;
        return this;
    }
}