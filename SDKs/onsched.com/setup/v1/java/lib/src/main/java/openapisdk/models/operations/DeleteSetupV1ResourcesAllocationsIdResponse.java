package openapisdk.models.operations;



public class DeleteSetupV1ResourcesAllocationsIdResponse {
    public String contentType;
    public DeleteSetupV1ResourcesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public DeleteSetupV1ResourcesAllocationsIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ResourcesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}