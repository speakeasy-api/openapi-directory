package openapisdk.models.operations;



public class ListServicePlansResponse {
    public String contentType;
    public ListServicePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServicePlansCollection servicePlansCollection;
    public ListServicePlansResponse withServicePlansCollection(openapisdk.models.shared.ServicePlansCollection servicePlansCollection) {
        this.servicePlansCollection = servicePlansCollection;
        return this;
    }
    public Long statusCode;
    public ListServicePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}