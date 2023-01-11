package openapisdk.models.operations;



public class QrCodeResponse {
    public openapisdk.models.shared.ApiError apiError;
    public QrCodeResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public QrCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] qrCode200ApplicationJSONBinaryString;
    public QrCodeResponse withQrCode200ApplicationJsonBinaryString(byte[] qrCode200ApplicationJSONBinaryString) {
        this.qrCode200ApplicationJSONBinaryString = qrCode200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public QrCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}