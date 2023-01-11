package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsUsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=institution_id")
    public String institutionId;
    public InstitutionsUsersListPathParams withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
}