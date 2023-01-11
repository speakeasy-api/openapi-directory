package openapisdk.models.operations;



public class ListCustomInstrumentsRequest {
    public ListCustomInstrumentsQueryParams queryParams;
    public ListCustomInstrumentsRequest withQueryParams(ListCustomInstrumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomInstrumentsSecurity security;
    public ListCustomInstrumentsRequest withSecurity(ListCustomInstrumentsSecurity security) {
        this.security = security;
        return this;
    }
}