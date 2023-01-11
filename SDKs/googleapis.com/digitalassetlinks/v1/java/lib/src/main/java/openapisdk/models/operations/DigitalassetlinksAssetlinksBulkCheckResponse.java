package openapisdk.models.operations;



public class DigitalassetlinksAssetlinksBulkCheckResponse {
    public openapisdk.models.shared.BulkCheckResponse bulkCheckResponse;
    public DigitalassetlinksAssetlinksBulkCheckResponse withBulkCheckResponse(openapisdk.models.shared.BulkCheckResponse bulkCheckResponse) {
        this.bulkCheckResponse = bulkCheckResponse;
        return this;
    }
    public String contentType;
    public DigitalassetlinksAssetlinksBulkCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DigitalassetlinksAssetlinksBulkCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}