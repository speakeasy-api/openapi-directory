package openapisdk.models.operations;



public class DfareportingVideoFormatsListResponse {
    public String contentType;
    public DfareportingVideoFormatsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingVideoFormatsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoFormatsListResponse videoFormatsListResponse;
    public DfareportingVideoFormatsListResponse withVideoFormatsListResponse(openapisdk.models.shared.VideoFormatsListResponse videoFormatsListResponse) {
        this.videoFormatsListResponse = videoFormatsListResponse;
        return this;
    }
}