package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMappingValuesKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public GetMappingValuesKeyKeyEnum key;
    public GetMappingValuesKeyPathParams withKey(GetMappingValuesKeyKeyEnum key) {
        this.key = key;
        return this;
    }
}