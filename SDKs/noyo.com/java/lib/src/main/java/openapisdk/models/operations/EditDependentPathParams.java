package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditDependentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dependent_id")
    public String dependentId;
    public EditDependentPathParams withDependentId(String dependentId) {
        this.dependentId = dependentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditDependentPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}