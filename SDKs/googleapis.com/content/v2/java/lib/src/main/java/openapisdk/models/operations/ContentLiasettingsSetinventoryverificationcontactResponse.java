package openapisdk.models.operations;



public class ContentLiasettingsSetinventoryverificationcontactResponse {
    public String contentType;
    public ContentLiasettingsSetinventoryverificationcontactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsSetInventoryVerificationContactResponse liasettingsSetInventoryVerificationContactResponse;
    public ContentLiasettingsSetinventoryverificationcontactResponse withLiasettingsSetInventoryVerificationContactResponse(openapisdk.models.shared.LiasettingsSetInventoryVerificationContactResponse liasettingsSetInventoryVerificationContactResponse) {
        this.liasettingsSetInventoryVerificationContactResponse = liasettingsSetInventoryVerificationContactResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsSetinventoryverificationcontactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}