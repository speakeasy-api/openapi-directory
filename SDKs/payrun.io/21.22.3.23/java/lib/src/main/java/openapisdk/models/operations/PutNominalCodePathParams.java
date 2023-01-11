package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNominalCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutNominalCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NominalCodeId")
    public String nominalCodeId;
    public PutNominalCodePathParams withNominalCodeId(String nominalCodeId) {
        this.nominalCodeId = nominalCodeId;
        return this;
    }
}