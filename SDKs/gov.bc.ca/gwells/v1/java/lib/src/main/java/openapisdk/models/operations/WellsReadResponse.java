package openapisdk.models.operations;



public class WellsReadResponse {
    public String contentType;
    public WellsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WellsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WellDetail wellDetail;
    public WellsReadResponse withWellDetail(openapisdk.models.shared.WellDetail wellDetail) {
        this.wellDetail = wellDetail;
        return this;
    }
}