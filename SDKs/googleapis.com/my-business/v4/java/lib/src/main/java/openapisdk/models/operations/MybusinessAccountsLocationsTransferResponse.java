package openapisdk.models.operations;



public class MybusinessAccountsLocationsTransferResponse {
    public String contentType;
    public MybusinessAccountsLocationsTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public MybusinessAccountsLocationsTransferResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}