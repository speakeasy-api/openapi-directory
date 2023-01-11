package openapisdk.models.operations;



public class ExportWirelessJsonRequest {
    public ExportWirelessJsonQueryParams queryParams;
    public ExportWirelessJsonRequest withQueryParams(ExportWirelessJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportWirelessJsonSecurity security;
    public ExportWirelessJsonRequest withSecurity(ExportWirelessJsonSecurity security) {
        this.security = security;
        return this;
    }
}