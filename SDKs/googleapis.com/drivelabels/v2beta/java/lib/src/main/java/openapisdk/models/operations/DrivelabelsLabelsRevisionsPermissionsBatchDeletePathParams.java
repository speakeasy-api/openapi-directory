package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}