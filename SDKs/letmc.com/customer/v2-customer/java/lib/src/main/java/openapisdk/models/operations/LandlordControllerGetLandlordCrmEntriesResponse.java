package openapisdk.models.operations;



public class LandlordControllerGetLandlordCrmEntriesResponse {
    public byte[] body;
    public LandlordControllerGetLandlordCrmEntriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LandlordControllerGetLandlordCrmEntriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordCrmEntry[] landlordCrmEntries;
    public LandlordControllerGetLandlordCrmEntriesResponse withLandlordCrmEntries(openapisdk.models.shared.LandlordCrmEntry[] landlordCrmEntries) {
        this.landlordCrmEntries = landlordCrmEntries;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetLandlordCrmEntriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}