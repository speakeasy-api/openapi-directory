package openapisdk.models.operations;



public class DisplayvideoPartnersGetResponse {
    public String contentType;
    public DisplayvideoPartnersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Partner partner;
    public DisplayvideoPartnersGetResponse withPartner(openapisdk.models.shared.Partner partner) {
        this.partner = partner;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}