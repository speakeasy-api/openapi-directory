package openapisdk.models.operations;



public class ListInstrumentsResponse {
    public String contentType;
    public ListInstrumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstrumentList instrumentList;
    public ListInstrumentsResponse withInstrumentList(openapisdk.models.shared.InstrumentList instrumentList) {
        this.instrumentList = instrumentList;
        return this;
    }
    public Long statusCode;
    public ListInstrumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}