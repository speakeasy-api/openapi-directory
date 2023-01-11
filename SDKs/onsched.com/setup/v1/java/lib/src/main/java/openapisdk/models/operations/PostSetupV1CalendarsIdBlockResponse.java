package openapisdk.models.operations;



public class PostSetupV1CalendarsIdBlockResponse {
    public String contentType;
    public PostSetupV1CalendarsIdBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public PostSetupV1CalendarsIdBlockResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1CalendarsIdBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}