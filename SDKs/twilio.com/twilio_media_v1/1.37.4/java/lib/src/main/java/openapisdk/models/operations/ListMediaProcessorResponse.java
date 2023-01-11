package openapisdk.models.operations;



public class ListMediaProcessorResponse {
    public String contentType;
    public ListMediaProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMediaProcessorListMediaProcessorResponse listMediaProcessorResponse;
    public ListMediaProcessorResponse withListMediaProcessorResponse(ListMediaProcessorListMediaProcessorResponse listMediaProcessorResponse) {
        this.listMediaProcessorResponse = listMediaProcessorResponse;
        return this;
    }
    public Long statusCode;
    public ListMediaProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}