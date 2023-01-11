package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPolicyModuleRequest {
    public PutPolicyModulePathParams pathParams;
    public PutPolicyModuleRequest withPathParams(PutPolicyModulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPolicyModuleQueryParams queryParams;
    public PutPolicyModuleRequest withQueryParams(PutPolicyModuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public String request;
    public PutPolicyModuleRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}