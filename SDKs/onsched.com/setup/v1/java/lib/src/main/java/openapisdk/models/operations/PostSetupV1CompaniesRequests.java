package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1CompaniesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CompanyInputModel companyInputModel;
    public PostSetupV1CompaniesRequests withCompanyInputModel(openapisdk.models.shared.CompanyInputModel companyInputModel) {
        this.companyInputModel = companyInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompanyInputModel companyInputModel1;
    public PostSetupV1CompaniesRequests withCompanyInputModel1(openapisdk.models.shared.CompanyInputModel companyInputModel1) {
        this.companyInputModel1 = companyInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CompanyInputModel companyInputModel2;
    public PostSetupV1CompaniesRequests withCompanyInputModel2(openapisdk.models.shared.CompanyInputModel companyInputModel2) {
        this.companyInputModel2 = companyInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CompanyInputModel companyInputModel3;
    public PostSetupV1CompaniesRequests withCompanyInputModel3(openapisdk.models.shared.CompanyInputModel companyInputModel3) {
        this.companyInputModel3 = companyInputModel3;
        return this;
    }
}