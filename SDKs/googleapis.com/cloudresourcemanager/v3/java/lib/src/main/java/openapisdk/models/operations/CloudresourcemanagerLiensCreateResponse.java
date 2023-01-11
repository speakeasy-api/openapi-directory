package openapisdk.models.operations;



public class CloudresourcemanagerLiensCreateResponse {
    public String contentType;
    public CloudresourcemanagerLiensCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Lien lien;
    public CloudresourcemanagerLiensCreateResponse withLien(openapisdk.models.shared.Lien lien) {
        this.lien = lien;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerLiensCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}