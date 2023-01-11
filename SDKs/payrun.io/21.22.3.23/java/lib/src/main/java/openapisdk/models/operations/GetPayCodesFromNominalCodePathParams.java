package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayCodesFromNominalCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetPayCodesFromNominalCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NominalCodeId")
    public String nominalCodeId;
    public GetPayCodesFromNominalCodePathParams withNominalCodeId(String nominalCodeId) {
        this.nominalCodeId = nominalCodeId;
        return this;
    }
}