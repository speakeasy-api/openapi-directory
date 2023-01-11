package openapisdk.models.operations;



public class GetLabelByExternalShipmentIdResponseOutput {
    public String contentType;
    public GetLabelByExternalShipmentIdResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLabelByExternalShipmentIdResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetLabelByExternalShipmentIdResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetLabelByExternalShipmentIdResponseBodyOutput getLabelByExternalShipmentIdResponseBody;
    public GetLabelByExternalShipmentIdResponseOutput withGetLabelByExternalShipmentIdResponseBody(openapisdk.models.shared.GetLabelByExternalShipmentIdResponseBodyOutput getLabelByExternalShipmentIdResponseBody) {
        this.getLabelByExternalShipmentIdResponseBody = getLabelByExternalShipmentIdResponseBody;
        return this;
    }
}