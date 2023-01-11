package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1CompaniesDomainsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel;
    public PostSetupV1CompaniesDomainsRequests withCompanyDomainInputModel(openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel) {
        this.companyDomainInputModel = companyDomainInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel1;
    public PostSetupV1CompaniesDomainsRequests withCompanyDomainInputModel1(openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel1) {
        this.companyDomainInputModel1 = companyDomainInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel2;
    public PostSetupV1CompaniesDomainsRequests withCompanyDomainInputModel2(openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel2) {
        this.companyDomainInputModel2 = companyDomainInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel3;
    public PostSetupV1CompaniesDomainsRequests withCompanyDomainInputModel3(openapisdk.models.shared.CompanyDomainInputModel companyDomainInputModel3) {
        this.companyDomainInputModel3 = companyDomainInputModel3;
        return this;
    }
}