package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFacilityIdsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetFacilityIdsTypeEnum type;
    public GetFacilityIdsQueryParams withType(GetFacilityIdsTypeEnum type) {
        this.type = type;
        return this;
    }
}