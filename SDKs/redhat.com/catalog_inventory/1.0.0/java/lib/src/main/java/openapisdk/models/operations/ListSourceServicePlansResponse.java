package openapisdk.models.operations;



public class ListSourceServicePlansResponse {
    public String contentType;
    public ListSourceServicePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceServicePlansResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServicePlansCollection servicePlansCollection;
    public ListSourceServicePlansResponse withServicePlansCollection(openapisdk.models.shared.ServicePlansCollection servicePlansCollection) {
        this.servicePlansCollection = servicePlansCollection;
        return this;
    }
    public Long statusCode;
    public ListSourceServicePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}