package openapisdk.models.operations;



public class ContentShippingsettingsListResponse {
    public String contentType;
    public ContentShippingsettingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingsettingsListResponse shippingsettingsListResponse;
    public ContentShippingsettingsListResponse withShippingsettingsListResponse(openapisdk.models.shared.ShippingsettingsListResponse shippingsettingsListResponse) {
        this.shippingsettingsListResponse = shippingsettingsListResponse;
        return this;
    }
    public Long statusCode;
    public ContentShippingsettingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}