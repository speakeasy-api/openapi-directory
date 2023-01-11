package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CompaniesDomainsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel;
    public PutSetupV1CompaniesDomainsIdRequests withCompanyDomainUpdateModel(openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel) {
        this.companyDomainUpdateModel = companyDomainUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel1;
    public PutSetupV1CompaniesDomainsIdRequests withCompanyDomainUpdateModel1(openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel1) {
        this.companyDomainUpdateModel1 = companyDomainUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel2;
    public PutSetupV1CompaniesDomainsIdRequests withCompanyDomainUpdateModel2(openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel2) {
        this.companyDomainUpdateModel2 = companyDomainUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel3;
    public PutSetupV1CompaniesDomainsIdRequests withCompanyDomainUpdateModel3(openapisdk.models.shared.CompanyDomainUpdateModel companyDomainUpdateModel3) {
        this.companyDomainUpdateModel3 = companyDomainUpdateModel3;
        return this;
    }
}