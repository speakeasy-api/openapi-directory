package openapisdk.models.operations;



public class GetShowsIdResponse {
    public byte[] body;
    public GetShowsIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetShowsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetShowsIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Show show;
    public GetShowsIdResponse withShow(openapisdk.models.shared.Show show) {
        this.show = show;
        return this;
    }
    public Long statusCode;
    public GetShowsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}