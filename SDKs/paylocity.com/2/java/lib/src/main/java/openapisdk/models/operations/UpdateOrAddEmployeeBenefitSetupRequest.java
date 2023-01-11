package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrAddEmployeeBenefitSetupRequest {
    public UpdateOrAddEmployeeBenefitSetupPathParams pathParams;
    public UpdateOrAddEmployeeBenefitSetupRequest withPathParams(UpdateOrAddEmployeeBenefitSetupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BenefitSetup request;
    public UpdateOrAddEmployeeBenefitSetupRequest withRequest(openapisdk.models.shared.BenefitSetup request) {
        this.request = request;
        return this;
    }
    public UpdateOrAddEmployeeBenefitSetupSecurity security;
    public UpdateOrAddEmployeeBenefitSetupRequest withSecurity(UpdateOrAddEmployeeBenefitSetupSecurity security) {
        this.security = security;
        return this;
    }
}