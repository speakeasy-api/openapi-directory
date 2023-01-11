package openapisdk.models.operations;



public class ListFleetResponse {
    public String contentType;
    public ListFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFleetListFleetResponse listFleetResponse;
    public ListFleetResponse withListFleetResponse(ListFleetListFleetResponse listFleetResponse) {
        this.listFleetResponse = listFleetResponse;
        return this;
    }
    public Long statusCode;
    public ListFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}