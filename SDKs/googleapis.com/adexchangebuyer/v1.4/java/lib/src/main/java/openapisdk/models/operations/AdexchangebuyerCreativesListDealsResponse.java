package openapisdk.models.operations;



public class AdexchangebuyerCreativesListDealsResponse {
    public String contentType;
    public AdexchangebuyerCreativesListDealsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeDealIds creativeDealIds;
    public AdexchangebuyerCreativesListDealsResponse withCreativeDealIds(openapisdk.models.shared.CreativeDealIds creativeDealIds) {
        this.creativeDealIds = creativeDealIds;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerCreativesListDealsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}