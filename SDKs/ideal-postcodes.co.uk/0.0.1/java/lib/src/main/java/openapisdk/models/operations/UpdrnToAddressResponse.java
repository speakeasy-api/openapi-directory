package openapisdk.models.operations;



public class UpdrnToAddressResponse {
    public String contentType;
    public UpdrnToAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public UpdrnToAddressResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public Long statusCode;
    public UpdrnToAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UdprnToAddressResponseSchema udprnToAddressResponseSchema;
    public UpdrnToAddressResponse withUdprnToAddressResponseSchema(openapisdk.models.shared.UdprnToAddressResponseSchema udprnToAddressResponseSchema) {
        this.udprnToAddressResponseSchema = udprnToAddressResponseSchema;
        return this;
    }
}