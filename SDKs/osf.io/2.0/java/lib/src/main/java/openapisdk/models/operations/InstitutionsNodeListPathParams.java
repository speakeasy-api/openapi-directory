package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsNodeListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=institution_id")
    public String institutionId;
    public InstitutionsNodeListPathParams withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
}