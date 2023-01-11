package openapisdk.models.operations;



public class SheetsSpreadsheetsGetRequest {
    public SheetsSpreadsheetsGetPathParams pathParams;
    public SheetsSpreadsheetsGetRequest withPathParams(SheetsSpreadsheetsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SheetsSpreadsheetsGetQueryParams queryParams;
    public SheetsSpreadsheetsGetRequest withQueryParams(SheetsSpreadsheetsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SheetsSpreadsheetsGetSecurity security;
    public SheetsSpreadsheetsGetRequest withSecurity(SheetsSpreadsheetsGetSecurity security) {
        this.security = security;
        return this;
    }
}