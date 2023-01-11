package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsRegistrationListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=institution_id")
    public String institutionId;
    public InstitutionsRegistrationListPathParams withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
}