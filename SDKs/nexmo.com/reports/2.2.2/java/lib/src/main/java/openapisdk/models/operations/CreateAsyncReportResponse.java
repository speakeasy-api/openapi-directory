package openapisdk.models.operations;



public class CreateAsyncReportResponse {
    public String contentType;
    public CreateAsyncReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAsyncReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createAsyncReport200ApplicationJSONOneOf;
    public CreateAsyncReportResponse withCreateAsyncReport200ApplicationJsonOneOf(Object createAsyncReport200ApplicationJSONOneOf) {
        this.createAsyncReport200ApplicationJSONOneOf = createAsyncReport200ApplicationJSONOneOf;
        return this;
    }
    public Object createAsyncReport400ApplicationJSONAny;
    public CreateAsyncReportResponse withCreateAsyncReport400ApplicationJsonAny(Object createAsyncReport400ApplicationJSONAny) {
        this.createAsyncReport400ApplicationJSONAny = createAsyncReport400ApplicationJSONAny;
        return this;
    }
    public Object createAsyncReport401ApplicationJSONAny;
    public CreateAsyncReportResponse withCreateAsyncReport401ApplicationJsonAny(Object createAsyncReport401ApplicationJSONAny) {
        this.createAsyncReport401ApplicationJSONAny = createAsyncReport401ApplicationJSONAny;
        return this;
    }
    public Object createAsyncReport403ApplicationJSONAny;
    public CreateAsyncReportResponse withCreateAsyncReport403ApplicationJsonAny(Object createAsyncReport403ApplicationJSONAny) {
        this.createAsyncReport403ApplicationJSONAny = createAsyncReport403ApplicationJSONAny;
        return this;
    }
    public Object createAsyncReport422ApplicationJSONAny;
    public CreateAsyncReportResponse withCreateAsyncReport422ApplicationJsonAny(Object createAsyncReport422ApplicationJSONAny) {
        this.createAsyncReport422ApplicationJSONAny = createAsyncReport422ApplicationJSONAny;
        return this;
    }
}