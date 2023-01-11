package openapisdk.models.operations;



public class GetLibraryResponse {
    public String contentType;
    public GetLibraryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLibraryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.LibraryResponse libraryResponse;
    public GetLibraryResponse withLibraryResponse(openapisdk.models.shared.LibraryResponse libraryResponse) {
        this.libraryResponse = libraryResponse;
        return this;
    }
    public Long statusCode;
    public GetLibraryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}