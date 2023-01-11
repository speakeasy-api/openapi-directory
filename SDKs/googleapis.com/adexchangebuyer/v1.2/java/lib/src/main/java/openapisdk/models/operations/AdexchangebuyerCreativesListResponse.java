package openapisdk.models.operations;



public class AdexchangebuyerCreativesListResponse {
    public String contentType;
    public AdexchangebuyerCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativesList creativesList;
    public AdexchangebuyerCreativesListResponse withCreativesList(openapisdk.models.shared.CreativesList creativesList) {
        this.creativesList = creativesList;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}