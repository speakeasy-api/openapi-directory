package openapisdk.models.operations;



public class ExportWirelessCsvRequest {
    public ExportWirelessCsvQueryParams queryParams;
    public ExportWirelessCsvRequest withQueryParams(ExportWirelessCsvQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportWirelessCsvSecurity security;
    public ExportWirelessCsvRequest withSecurity(ExportWirelessCsvSecurity security) {
        this.security = security;
        return this;
    }
}