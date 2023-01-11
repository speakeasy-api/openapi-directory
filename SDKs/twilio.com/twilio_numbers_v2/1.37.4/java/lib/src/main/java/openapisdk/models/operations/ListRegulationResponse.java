package openapisdk.models.operations;



public class ListRegulationResponse {
    public String contentType;
    public ListRegulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRegulationListRegulationResponse listRegulationResponse;
    public ListRegulationResponse withListRegulationResponse(ListRegulationListRegulationResponse listRegulationResponse) {
        this.listRegulationResponse = listRegulationResponse;
        return this;
    }
    public Long statusCode;
    public ListRegulationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}