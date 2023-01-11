package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsUpdatePermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DrivelabelsLabelsRevisionsUpdatePermissionsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}