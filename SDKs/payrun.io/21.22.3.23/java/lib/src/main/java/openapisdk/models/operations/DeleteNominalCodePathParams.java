package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNominalCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteNominalCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NominalCodeId")
    public String nominalCodeId;
    public DeleteNominalCodePathParams withNominalCodeId(String nominalCodeId) {
        this.nominalCodeId = nominalCodeId;
        return this;
    }
}