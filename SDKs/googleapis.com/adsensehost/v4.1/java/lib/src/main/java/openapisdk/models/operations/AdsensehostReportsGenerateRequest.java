package openapisdk.models.operations;



public class AdsensehostReportsGenerateRequest {
    public AdsensehostReportsGenerateQueryParams queryParams;
    public AdsensehostReportsGenerateRequest withQueryParams(AdsensehostReportsGenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdsensehostReportsGenerateSecurity security;
    public AdsensehostReportsGenerateRequest withSecurity(AdsensehostReportsGenerateSecurity security) {
        this.security = security;
        return this;
    }
}