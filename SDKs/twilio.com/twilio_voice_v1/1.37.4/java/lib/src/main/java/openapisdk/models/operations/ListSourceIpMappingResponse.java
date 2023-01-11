package openapisdk.models.operations;



public class ListSourceIpMappingResponse {
    public String contentType;
    public ListSourceIpMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSourceIpMappingListSourceIpMappingResponse listSourceIpMappingResponse;
    public ListSourceIpMappingResponse withListSourceIpMappingResponse(ListSourceIpMappingListSourceIpMappingResponse listSourceIpMappingResponse) {
        this.listSourceIpMappingResponse = listSourceIpMappingResponse;
        return this;
    }
    public Long statusCode;
    public ListSourceIpMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}