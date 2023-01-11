package openapisdk.models.operations;



public class GetTemplateModelRequest {
    public GetTemplateModelPathParams pathParams;
    public GetTemplateModelRequest withPathParams(GetTemplateModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTemplateModelHeaders headers;
    public GetTemplateModelRequest withHeaders(GetTemplateModelHeaders headers) {
        this.headers = headers;
        return this;
    }
}