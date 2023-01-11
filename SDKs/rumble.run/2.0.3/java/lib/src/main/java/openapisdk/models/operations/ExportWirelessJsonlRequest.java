package openapisdk.models.operations;



public class ExportWirelessJsonlRequest {
    public ExportWirelessJsonlQueryParams queryParams;
    public ExportWirelessJsonlRequest withQueryParams(ExportWirelessJsonlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportWirelessJsonlSecurity security;
    public ExportWirelessJsonlRequest withSecurity(ExportWirelessJsonlSecurity security) {
        this.security = security;
        return this;
    }
}