package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsFindingsBulkMutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsFindingsBulkMutePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}