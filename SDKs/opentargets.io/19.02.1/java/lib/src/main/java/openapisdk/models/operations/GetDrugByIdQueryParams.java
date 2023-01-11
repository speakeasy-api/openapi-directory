package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDrugByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drug_id")
    public String drugId;
    public GetDrugByIdQueryParams withDrugId(String drugId) {
        this.drugId = drugId;
        return this;
    }
}