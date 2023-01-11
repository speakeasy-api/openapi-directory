package openapisdk.models.operations;



public class CodeScanningListAlertsForRepoRequest {
    public CodeScanningListAlertsForRepoPathParams pathParams;
    public CodeScanningListAlertsForRepoRequest withPathParams(CodeScanningListAlertsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CodeScanningListAlertsForRepoQueryParams queryParams;
    public CodeScanningListAlertsForRepoRequest withQueryParams(CodeScanningListAlertsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}