package openapisdk.models.operations;



public class VaultMattersExportsCreateResponse {
    public String contentType;
    public VaultMattersExportsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Export export;
    public VaultMattersExportsCreateResponse withExport(openapisdk.models.shared.Export export) {
        this.export = export;
        return this;
    }
    public Long statusCode;
    public VaultMattersExportsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}