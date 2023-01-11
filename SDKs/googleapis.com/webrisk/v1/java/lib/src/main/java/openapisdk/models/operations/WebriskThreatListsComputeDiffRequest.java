package openapisdk.models.operations;



public class WebriskThreatListsComputeDiffRequest {
    public WebriskThreatListsComputeDiffQueryParams queryParams;
    public WebriskThreatListsComputeDiffRequest withQueryParams(WebriskThreatListsComputeDiffQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebriskThreatListsComputeDiffSecurity security;
    public WebriskThreatListsComputeDiffRequest withSecurity(WebriskThreatListsComputeDiffSecurity security) {
        this.security = security;
        return this;
    }
}