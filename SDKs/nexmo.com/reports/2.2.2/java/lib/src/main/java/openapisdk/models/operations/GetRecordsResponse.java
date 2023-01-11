package openapisdk.models.operations;



public class GetRecordsResponse {
    public String contentType;
    public GetRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getRecords200ApplicationJSONOneOf;
    public GetRecordsResponse withGetRecords200ApplicationJsonOneOf(Object getRecords200ApplicationJSONOneOf) {
        this.getRecords200ApplicationJSONOneOf = getRecords200ApplicationJSONOneOf;
        return this;
    }
    public Object getRecords403ApplicationJSONAny;
    public GetRecordsResponse withGetRecords403ApplicationJsonAny(Object getRecords403ApplicationJSONAny) {
        this.getRecords403ApplicationJSONAny = getRecords403ApplicationJSONAny;
        return this;
    }
    public Object getRecords422ApplicationJSONOneOf;
    public GetRecordsResponse withGetRecords422ApplicationJsonOneOf(Object getRecords422ApplicationJSONOneOf) {
        this.getRecords422ApplicationJSONOneOf = getRecords422ApplicationJSONOneOf;
        return this;
    }
}