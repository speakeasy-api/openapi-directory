package openapisdk.models.operations;



public class VaultMattersExportsGetResponse {
    public String contentType;
    public VaultMattersExportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Export export;
    public VaultMattersExportsGetResponse withExport(openapisdk.models.shared.Export export) {
        this.export = export;
        return this;
    }
    public Long statusCode;
    public VaultMattersExportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}