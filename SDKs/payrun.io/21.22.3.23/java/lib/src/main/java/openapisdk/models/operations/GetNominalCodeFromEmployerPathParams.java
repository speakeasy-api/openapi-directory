package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNominalCodeFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetNominalCodeFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NominalCodeId")
    public String nominalCodeId;
    public GetNominalCodeFromEmployerPathParams withNominalCodeId(String nominalCodeId) {
        this.nominalCodeId = nominalCodeId;
        return this;
    }
}