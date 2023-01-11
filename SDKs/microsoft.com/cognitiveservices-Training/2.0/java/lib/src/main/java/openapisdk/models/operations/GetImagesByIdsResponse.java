package openapisdk.models.operations;



public class GetImagesByIdsResponse {
    public byte[] body;
    public GetImagesByIdsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetImagesByIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Image[] images;
    public GetImagesByIdsResponse withImages(openapisdk.models.shared.Image[] images) {
        this.images = images;
        return this;
    }
    public Long statusCode;
    public GetImagesByIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}