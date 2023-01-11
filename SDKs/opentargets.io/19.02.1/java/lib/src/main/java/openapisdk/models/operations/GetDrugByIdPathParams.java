package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDrugByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DRUG_ID")
    public String drugID;
    public GetDrugByIdPathParams withDrugId(String drugID) {
        this.drugID = drugID;
        return this;
    }
}