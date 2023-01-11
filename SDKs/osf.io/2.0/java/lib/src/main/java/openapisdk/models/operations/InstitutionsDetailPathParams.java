package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=institution_id")
    public String institutionId;
    public InstitutionsDetailPathParams withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
}