package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DrivelabelsLabelsRevisionsPermissionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}