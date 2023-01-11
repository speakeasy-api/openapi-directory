package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CompaniesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CompanyUpdateModel companyUpdateModel;
    public PutSetupV1CompaniesRequests withCompanyUpdateModel(openapisdk.models.shared.CompanyUpdateModel companyUpdateModel) {
        this.companyUpdateModel = companyUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyUpdateModel companyUpdateModel1;
    public PutSetupV1CompaniesRequests withCompanyUpdateModel1(openapisdk.models.shared.CompanyUpdateModel companyUpdateModel1) {
        this.companyUpdateModel1 = companyUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CompanyUpdateModel companyUpdateModel2;
    public PutSetupV1CompaniesRequests withCompanyUpdateModel2(openapisdk.models.shared.CompanyUpdateModel companyUpdateModel2) {
        this.companyUpdateModel2 = companyUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CompanyUpdateModel companyUpdateModel3;
    public PutSetupV1CompaniesRequests withCompanyUpdateModel3(openapisdk.models.shared.CompanyUpdateModel companyUpdateModel3) {
        this.companyUpdateModel3 = companyUpdateModel3;
        return this;
    }
}