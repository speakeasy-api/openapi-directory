package openapisdk.models.operations;



public class DeleteConsentRequest {
    public DeleteConsentPathParams pathParams;
    public DeleteConsentRequest withPathParams(DeleteConsentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConsentHeaders headers;
    public DeleteConsentRequest withHeaders(DeleteConsentHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteConsentSecurity security;
    public DeleteConsentRequest withSecurity(DeleteConsentSecurity security) {
        this.security = security;
        return this;
    }
}