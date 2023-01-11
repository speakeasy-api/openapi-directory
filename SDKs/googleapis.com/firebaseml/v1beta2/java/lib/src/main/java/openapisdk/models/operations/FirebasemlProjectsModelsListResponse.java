package openapisdk.models.operations;



public class FirebasemlProjectsModelsListResponse {
    public String contentType;
    public FirebasemlProjectsModelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListModelsResponse listModelsResponse;
    public FirebasemlProjectsModelsListResponse withListModelsResponse(openapisdk.models.shared.ListModelsResponse listModelsResponse) {
        this.listModelsResponse = listModelsResponse;
        return this;
    }
    public Long statusCode;
    public FirebasemlProjectsModelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}