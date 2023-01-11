package openapisdk.models.operations;



public class SvgconvertResponse {
    public String contentType;
    public SvgconvertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public SvgconvertFileUrl fileUrl;
    public SvgconvertResponse withFileUrl(SvgconvertFileUrl fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    }
    public Long statusCode;
    public SvgconvertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}