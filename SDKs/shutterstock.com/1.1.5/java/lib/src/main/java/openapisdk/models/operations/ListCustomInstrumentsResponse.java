package openapisdk.models.operations;



public class ListCustomInstrumentsResponse {
    public String contentType;
    public ListCustomInstrumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstrumentsListResult instrumentsListResult;
    public ListCustomInstrumentsResponse withInstrumentsListResult(openapisdk.models.shared.InstrumentsListResult instrumentsListResult) {
        this.instrumentsListResult = instrumentsListResult;
        return this;
    }
    public Long statusCode;
    public ListCustomInstrumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}