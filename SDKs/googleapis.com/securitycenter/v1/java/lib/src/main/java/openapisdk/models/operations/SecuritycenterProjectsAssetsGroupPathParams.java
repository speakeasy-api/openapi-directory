package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsAssetsGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsAssetsGroupPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}