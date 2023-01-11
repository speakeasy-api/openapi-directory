package openapisdk.models.operations;



public class ListMediaResponse {
    public String contentType;
    public ListMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMediaListMediaResponse listMediaResponse;
    public ListMediaResponse withListMediaResponse(ListMediaListMediaResponse listMediaResponse) {
        this.listMediaResponse = listMediaResponse;
        return this;
    }
    public Long statusCode;
    public ListMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}