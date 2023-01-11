package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDependentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dependent_id")
    public String dependentId;
    public GetDependentPathParams withDependentId(String dependentId) {
        this.dependentId = dependentId;
        return this;
    }
}