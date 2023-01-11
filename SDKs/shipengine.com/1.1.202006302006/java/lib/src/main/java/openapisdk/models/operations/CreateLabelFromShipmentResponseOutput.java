package openapisdk.models.operations;



public class CreateLabelFromShipmentResponseOutput {
    public String contentType;
    public CreateLabelFromShipmentResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateLabelFromShipmentResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateLabelFromShipmentResponseBodyOutput createLabelFromShipmentResponseBody;
    public CreateLabelFromShipmentResponseOutput withCreateLabelFromShipmentResponseBody(openapisdk.models.shared.CreateLabelFromShipmentResponseBodyOutput createLabelFromShipmentResponseBody) {
        this.createLabelFromShipmentResponseBody = createLabelFromShipmentResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateLabelFromShipmentResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}