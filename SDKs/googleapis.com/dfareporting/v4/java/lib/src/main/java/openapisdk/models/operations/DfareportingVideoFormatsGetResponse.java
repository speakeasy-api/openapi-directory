package openapisdk.models.operations;



public class DfareportingVideoFormatsGetResponse {
    public String contentType;
    public DfareportingVideoFormatsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingVideoFormatsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoFormat videoFormat;
    public DfareportingVideoFormatsGetResponse withVideoFormat(openapisdk.models.shared.VideoFormat videoFormat) {
        this.videoFormat = videoFormat;
        return this;
    }
}