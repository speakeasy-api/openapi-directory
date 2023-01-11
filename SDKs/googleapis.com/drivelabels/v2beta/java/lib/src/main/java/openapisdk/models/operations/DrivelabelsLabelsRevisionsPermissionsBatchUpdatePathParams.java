package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}